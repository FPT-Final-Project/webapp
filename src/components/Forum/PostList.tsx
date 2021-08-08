import { Avatar, Button, Comment, Form, Tooltip } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import moment from 'moment';
import React, { ChangeEvent, useEffect, useState } from 'react';
import questionAnswerService from '../../services/questionAnswer.service';
import userService from '../../services/user.service';
import CommentList from './CommentList';

const Editor = ({ onChange, value, onSubmit } : {onChange: any, value: any, onSubmit: any}) => {
  return (
    <>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          onClick={onSubmit}
          type="primary"
        >
        Add Comment
        </Button>
      </Form.Item>
    </>
  );
};
const PostList = ({ comment, handleToggle, index, userLogin } : {comment: any, handleToggle: any, index:any, userLogin: any}) => {
  const { patientId, _id } = comment;
  const [user, setUser] = useState({
    name: '',
    avatar: '',
  });
  const [answers, setAnswers] = useState({
    answers: [] as any,
    value: '',
  });
  useEffect(() => {
    questionAnswerService.getComments(_id).then((res: any) => setAnswers({
      value: '',
      answers: [...answers.answers,
        ...res,
      ],
    }));
  }, []);
  useEffect(() => {
    userService.getUserProfile(patientId).then((res: any) => setUser(res));
  }, []);
  const handleChange = (e: ChangeEvent<any>) => {
    setAnswers({
      ...answers,
      value: e.target.value,
    });
  };
  const handleSubmit = async () => {
    if (!answers.value) {
      return;
    }
    const result = await questionAnswerService.postComment(_id, answers.value);
    setAnswers({
      value: '',
      answers: [...answers.answers, result],
    });
  };
  return (
    <div className="comment">
      <Comment
        author={user.name || ''}
        avatar={(
          <Avatar
            src={user.avatar || 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
            alt="avt"
          />
        )}
        content={comment?.description}
        datetime={(
          <p>
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              {moment().subtract(1, 'days').fromNow()}
            </Tooltip>
          </p>
        )}
      >
        <div className="reply-comment">
          <Button onClick={() => handleToggle(index)}><i className="fas fa-reply" />Reply</Button>
          {comment.show
              && (
                <div>
                  <div>
                    {answers.answers.length > 0 ? <CommentList author={userLogin} answers={answers.answers} /> : 'No reply'}
                    {
                      userLogin.role === 'doctor' ? (
                        <Comment
                          avatar={(
                            <Avatar src={user?.avatar || 'https://img.hoidap247.com/picture/question/20200508/large_1588936738888.jpg'} />
                          )}
                          content={(
                            <Editor
                              onChange={handleChange}
                              onSubmit={handleSubmit}
                              value={answers.value}
                            />
                          )}
                        />
                      ) : <></>
                    }
                  </div>
                </div>
              )}
        </div>
      </Comment>
    </div>
  );
};

export default PostList;
