import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Comment, Dropdown, Input, Menu, Row, Tooltip, List } from 'antd';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import questionAnswerService from '../../services/questionAnswer.service';

import questionAnswerAction from '../../stores/actions/questionAnswer.action';
import { IRootState } from '../../stores/store';
import PostList from './PostList';
import './style.scss';

const menu = (
  <Menu>
    <Menu.Item key="1">Option1</Menu.Item>
    <Menu.Item key="2">Option2</Menu.Item>
    <Menu.Item key="3">Option3</Menu.Item>
  </Menu>
);
const Forum = () => {
  const { user } = useSelector((state: IRootState) => ({
    user: state.authentication.user,
  }));
  const dispatch = useDispatch();
  const [posts, setPosts] = useState({
    comments: [] as any,
    value: '',
  });
  useEffect(() => {
    const source = axios.CancelToken.source();

    if (user?.role === 'patient') {
      dispatch<any>(questionAnswerAction.getOwnerPost()).then((res: any) => {
        res.forEach((itm: any) => {
          itm.show = false;
        });
        setPosts({
          value: '',
          comments: [...posts.comments,
            ...res,
          ] });
      });
    }
    if (user?.role === 'doctor') {
      dispatch<any>(questionAnswerAction.getPosts()).then((res: any) => {
        res.forEach((itm: any) => {
          itm.show = false;
        });
        setPosts({
          value: '',
          comments: [...posts.comments,
            ...res,
          ] });
      });
    }
    return () => {
      source.cancel();
    };
  }, []);
  const handleChange = (e: ChangeEvent<any>) => {
    setPosts({
      ...posts,
      value: e.target.value,
    });
  };
  const handleSubmit = async () => {
    if (!posts.value) {
      return;
    }
    const result = await questionAnswerService.askNewQuestion(posts.value);
    result.show = false;
    setPosts({
      value: '',
      comments: [...posts.comments, result],
    });
  };
  const handleToggle = (i: number) => {
    setPosts({
      value: '',
      comments: posts.comments.map((comment: any, index: any) => {
        if (index === i) {
          comment.show = !comment.show;
        } else { comment.show = false; }
        return comment;
      }),
    });
  };
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
        {user?.role === 'patient' ? (
          <Row className="question-input" justify="space-between">
            <Input
              style={{ width: '95%', borderRadius: '8px' }}
              placeholder="Add a new post"
              onChange={handleChange}
              value={posts.value}
            />
            <Button
              style={{ width: '4%' }}
              onClick={handleSubmit}
            >
              <PlusOutlined />
            </Button>
          </Row>
        ) : '' }
        {posts.comments.map((comment: any, i: any) => {
          return (
            <PostList comment={comment} key={i} index={i} handleToggle={handleToggle} userLogin={user} />
          );
        })}
      </div>
    </div>

  );
};

export default Forum;
