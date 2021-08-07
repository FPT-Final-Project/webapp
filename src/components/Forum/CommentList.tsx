import { Avatar, Button, Comment, Tooltip } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import userService from '../../services/user.service';

const CommentList = ({ comment, handleToggle, index } : {comment: any, handleToggle: any, index:any}) => {
  const { patientId } = comment;
  const [user, setUser] = useState({
    name: '',
    avatar: '',
  });
  useEffect(() => {
    userService.getUserProfile(patientId).then((res: any) => setUser(res));
  }, []);
  return (
    <div className="comment">
      <Comment
        author={user?.name || 'Long'}
        avatar={(
          <Avatar
            src={user?.avatar || 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
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
                    <Comment
                      avatar={(
                        <Avatar src={user?.avatar || 'https://img.hoidap247.com/picture/question/20200508/large_1588936738888.jpg'} />
                      )}
                      content={<p> Hoang Long </p>}
                    />
                  </div>
                </div>
              )}
        </div>
      </Comment>
    </div>
  );
};

export default CommentList;
