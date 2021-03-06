import { Avatar, Comment, List } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';
import userService from '../../services/user.service';

const Comments = ({ information } : { information: any }) => {
  const [author, setAuthor] = useState({
    name: '',
    avatar: '',
  });
  const [unMounted, setUnMounted] = useState(false);
  const { description, doctorId } = information;

  useEffect(() => {
    userService.getUserProfile(doctorId).then((res: any) => {
      if (!unMounted) {
        setAuthor(res);
      }
    });
    return () => {
      setUnMounted(true);
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
          {moment(information.createdAt).format('DD/MM/YYYY')}
        </p>
      )}
      content={description || 'No Reply'}
    />
  );
};

const CommentList = ({ answers, author } : { answers :any, author:any }) => {
  return (
    <>
      <List
        dataSource={answers}
        header={`${answers.length} ${answers.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={(props: any) => {
          return (
            <Comments information={props} />
          );
        }}
      />
    </>
  );
};

export default CommentList;
