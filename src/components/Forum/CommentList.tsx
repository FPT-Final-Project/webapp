import { Avatar, Comment, List } from 'antd';
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import userService from '../../services/user.service';

const Comments = ({ infomation } : {infomation: any}) => {
  const [author, setAuthor] = useState({
    name: '',
    avatar: '',
  });
  const { description, doctorId } = infomation;
  useEffect(() => {
    const source = axios.CancelToken.source();

    userService.getUserProfile(doctorId).then((res: any) => setAuthor(res));
    return () => {
      source.cancel();
    };
  }, []);
  return (
    <Comment
      author={author?.name}
      avatar={(
        <Avatar
          src={author.avatar || '/doctorPsy.png'}
          alt="Han Solo"
        />
      )}
      datetime={(
        <p>
          {moment(infomation.createdAt).format('DD/MM/YYYY')}
        </p>
      )}
      content={description || 'No Reply'}
    />
  );
};

const CommentList = ({ answers, author } : {answers :any, author:any}) => {
  return (
    <>
      <List
        dataSource={answers}
        header={`${answers.length} ${answers.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={(props: any) => {
          return (
            <Comments infomation={props} />
          );
        }}
      />
    </>
  );
};

export default CommentList;
