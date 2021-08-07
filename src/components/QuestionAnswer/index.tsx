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
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
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

  const { postAnswer, replyComment } = useSelector((state: IRootState) => ({
    postAnswer: state.questionAnswer,
    replyComment: state.questionAnswer,
  }));

  const [state, setState] = useState({
    posts: [{
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
      comments: [{
        author: 'Dat Le',
        avatar: 'https://img.hoidap247.com/picture/question/20200508/large_1588936738888.jpg',
        content:
          <p>
            Hello, Duy. I know you're stressed out at work. We can meet in person if you make an appointment!
          </p>,
        datetime: moment().fromNow(),
        show: false,
      }],
    }],

    submitting: false,
    value: '',
    valuePost: '',
  });
  // comment
  const handleSubmit = (i: any) => {
    if (!state.value) {
      return;
    }
    setState({
      ...state,
      submitting: true,
    });
    setTimeout(() => {
      const newPost = {
        ...state.posts[i],
        comments: [...state.posts[i].comments, {
          author: 'Dat Le',
          avatar: 'https://img.hoidap247.com/picture/question/20200508/large_1588936738888.jpg',
          content: <p>{state.value}</p>,
          datetime: moment().fromNow(),
          show: false,
        }],
      };
      const postes = [...state.posts];
      postes[i] = newPost;
      setState({
        submitting: false,
        value: '',
        valuePost: '',
        posts: postes,
      });
    }, 1000);
  };

  const handleChange = (e: ChangeEvent<any>) => {
    setState({
      ...state,
      value: e.target.value,
    });
  };

  // post
  const handleSubmitPost = () => {
    if (!state.valuePost) {
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
        valuePost: '',
        posts: [
          ...state.posts,
          {
            author: 'Duy',
            avatar: 'https://img.hoidap247.com/picture/question/20200508/large_1588936738888.jpg',
            content: <p>{state.valuePost}</p>,
            datetime: moment().fromNow(),
            show: false,
            comments: [],
          },
        ],
      });
    }, 1000);
  };

  const handleChangePost = (e: ChangeEvent<any>) => {
    setState({
      ...state,
      valuePost: e.target.value,
    });
  };

  const handleToggle = (i: number) => {
    setState({
      submitting: false,
      value: '',
      valuePost: '',
      posts: state.posts.map((post, index) => {
        if (index === i) {
          post.show = true;
        } else { post.show = false; }
        return post;
      }),
    });
  };
  const { submitting, value } = state;
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
            onChange={handleChangePost}
          />
          <Button
            style={{ width: '4%' }}
            onClick={handleSubmitPost}
          >
            <PlusOutlined />
          </Button>
        </Row>
        {state.posts.map((post: any, i) => {
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
                content={post.content}
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
                  {post.show
                    && (
                      <div>
                        <div>
                          {post.comments.length > 0 && <CommentList comments={post.comments} />}
                          <Comment
                            avatar={(
                              <Avatar src="https://img.hoidap247.com/picture/question/20200508/large_1588936738888.jpg" />
                            )}
                            content={(
                              <Editor
                                onChange={handleChange}
                                onSubmit={() => handleSubmit(i)}
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
