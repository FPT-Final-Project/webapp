/* eslint-disable max-len */
import React, { ChangeEvent, useState } from 'react';
import {
  Row, Button, Col, Menu, Dropdown, Input, Comment, Avatar, Tooltip, List, Form,
} from 'antd';
import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../stores/store';
import questionAnswerAction from '../../stores/actions/questionAnswer.action';

const { TextArea } = Input;

const menu = (
  <Menu>
    <Menu.Item key="1">Option1</Menu.Item>
    <Menu.Item key="2">Option2</Menu.Item>
    <Menu.Item key="3">Option3</Menu.Item>
  </Menu>
);

const CommentList = ({ comments }: { comments: any }) => (
  <List
    dataSource={comments}
    header={`${comments.length - 1} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment content {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }: { onChange: any, onSubmit: any, submitting: any, value: any }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
      >
        Add Comment
      </Button>
    </Form.Item>
  </>
);

const QuestionAnswer: React.FC = () => {
  const dispatch = useDispatch();

  const { posts } = useSelector((state: IRootState) => ({ posts: state.questionAnswer }));

  const datas = (posts || []).map((post: any) => ({
    ...post,
  }));

  const [state, setState] = useState({
    comments: [{
      author: 'Ngo Hoang The Duy',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:
        <p>
          Hi Doctors,
          I have a few problems that need to be resolved by the doctors.
          &nbsp;Lately I've been having trouble sleeping.
          I can't sleep well, wake up in the middle of the night
          :&nbsp;and during work or lose focus. I would like to seek
          advice from a doctor.
        </p>,
      datetime: moment().fromNow(),
      show: false,
    }],
    submitting: false,
    value: '',
  });

  const handleSubmit = () => {
    if (!state.value) {
      return;
    }
    setState({
      ...state,
      submitting: true,
    });
    setTimeout(() => {
      setState({
        submitting: false,
        value: '',
        comments: [
          ...state.comments,
          {
            author: 'Dat Le',
            avatar: 'https://img.hoidap247.com/picture/question/20200508/large_1588936738888.jpg',
            content: <p>{state.value}</p>,
            datetime: moment().fromNow(),
            show: false,
          },
        ],
      });
    }, 1000);
  };

  const handleChange = (e: ChangeEvent<any>) => {
    setState({
      ...state,
      value: e.target.value,
    });
  };

  const handleToggle = (i: number) => {
    setState({
      submitting: false,
      value: '',
      comments: state.comments.map((comment, index) => {
        if (index === i) {
          comment.show = true;
        } else { comment.show = false; }
        return comment;
      }),
    });
  };
  const { comments, submitting, value } = state;
  return (

    <div className="wrap-qa">
      <div className="banner-qa">
        <div className="banner-qa__h2">Forum Questions</div>
        <div className="banner-qa__description">To have a stable psychological health, our PsyCare will give you the best counselling service for you</div>
      </div>
      <div className="question-form">
        <Row justify="space-between">
          <Col span={8} xs={24} sm={12}>
            <h2>Question and Answer</h2>
          </Col>
          <Col span={8} xs={24} sm={12}>
            <Dropdown overlay={menu} trigger={['click']}>
              <Button className="drop-menu">
                Filter
                <DownOutlined />
              </Button>
            </Dropdown>
          </Col>
        </Row>
        {/* post */}
        <Row className="question-input" justify="space-between">
          <Input
            style={{ width: '95%', borderRadius: '8px' }}
            placeholder="Add a new post"
            onChange={handleChange}
          />
          <Button
            style={{ width: '4%' }}
            onClick={handleSubmit}
          >
            <PlusOutlined />
          </Button>
        </Row>
        {state.comments.map((comment: any, i) => {
          return (
            <div className="comment">
              <Comment
                author={<a href="/#">Ngo Hoang The Duy</a>}
                avatar={(
                  <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="avt"
                  />
                )}
                content={comment.content}
                datetime={(
                  <p>
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                      {moment().fromNow()}
                    </Tooltip>
                  </p>
                )}
              >
                <div className="reply-comment">
                  <Button onClick={() => handleToggle(i)}><i className="fas fa-reply" />Reply</Button>
                  {comment.show
                    && (
                      <div>
                        <div>
                          {comments.length > 0 && <CommentList comments={comments} />}
                          <Comment
                            avatar={(
                              <Avatar src="https://img.hoidap247.com/picture/question/20200508/large_1588936738888.jpg" />
                            )}
                            content={(
                              <Editor
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                                submitting={submitting}
                                value={value}
                              />
                            )}
                          />
                        </div>
                      </div>
                    )}
                </div>
              </Comment>
            </div>
          );
        })}
      </div>
    </div>

  );
};

export default QuestionAnswer;
