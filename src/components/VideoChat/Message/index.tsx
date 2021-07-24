import './style.scss';

const Message = ({ message: { text, userid }, myname } : any) => {
  let isSentByCurrentUser = false;
  let sendname = '';
  if (userid === '1') {
    sendname = ('Bao');
  } else if (userid === '2') {
    sendname = ('Long');
  }
  if (myname === sendname) {
    isSentByCurrentUser = true;
  }
  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">Me</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{text}</p>
          </div>
        </div>
      )
      : (
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundLight">
            <p className="messageText colorDark">{text}</p>
          </div>
          <p className="sentText pl-10 ">{sendname}</p>
        </div>
      )
  );
};

export default Message;
