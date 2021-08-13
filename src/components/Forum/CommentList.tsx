/* eslint-disable no-undef */
import { Avatar, Comment, List } from 'antd';
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
    let mounted = false;
    userService.getUserProfile(doctorId).then((res: any) => {
      if (!mounted) {
        setAuthor(res);
      }
    });
    return () => {
      mounted = true;
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
