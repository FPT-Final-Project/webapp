import './Message.css';

const Message = ({ text, myname, sendname } : any) => {
  let isSentByCurrentUser = false;
  if (myname === sendname) {
    isSentByCurrentUser = true;
  }
  console.log(`${text}**`);
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
