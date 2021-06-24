import React from 'react'
import './Chatbox.css';
import { WechatOutlined,SendOutlined } from '@ant-design/icons';


const Chatbox = () =>{
    return <div className="mainRight">
      
    <div className="mainHeader">
      <span><WechatOutlined /></span>
      <h3>Chat Box</h3>
    </div>
    <div className="mainChatWindow">
      <ul className="messagesContainer">
      </ul>
   </div>
   
   <div className="mainMessageContainer">
     <div className="inputchatMessage">
      <input id="chatMessage" type="text" placeholder="Type message here..."/>
     </div>
      <div className="buttonSendMessageContainer">
        <span className="buttonSendMessage">
        <SendOutlined >
      <button id="sendMessage"></button>
      </SendOutlined>
        </span>
      </div>
   </div>
  
  </div>
}

export default Chatbox;