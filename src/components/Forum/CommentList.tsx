import { Avatar, Comment, List } from 'antd';
import React, { useState } from 'react';
import userService from '../../services/user.service';

const CommentList = ({ answers, author } : {answers :any, author:any}) => {
  return (
    <>
      <List
        dataSource={answers}
        header={`${answers.length} ${answers.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={(props: any) => {
          return (
            <Comment
              author="Doctor"
              avatar={(
                <Avatar
                  src="https://img.hoidap247.com/picture/question/20200508/large_1588936738888.jpg"
                  alt="Han Solo"
                />
              )}
              content={props ? props.description : 'No Reply'}
              {...props}
            />
          );
        }}
      />
    </>
  );
};

export default CommentList;
