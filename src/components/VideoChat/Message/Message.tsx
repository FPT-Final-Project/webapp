import React from 'react';

import './Message.css';


const Message = ({message, userId}:any) => {
  let isSentByCurrentUser = false;
  // const trimmedName = name.trim().toLowerCase();
  // if(user === trimmedName) {
  //   isSentByCurrentUser = true;
  // }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{userId}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{message}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{message}</p>
            </div>
            <p className="sentText pl-10 ">{userId}</p>
          </div>
        )
  );
}

export default Message;