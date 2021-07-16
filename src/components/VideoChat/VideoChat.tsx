/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/media-has-caption */
import { useState, useRef, useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';
import { WechatOutlined, SendOutlined } from '@ant-design/icons';
import Peer from 'peerjs';
import { io } from 'socket.io-client';
import { useLocation } from 'react-router-dom';
import doctor from '../../assets/doctor.png';
import phone from '../../assets/phone.svg';
import mute from '../../assets/mute.svg';
import unmute from '../../assets/unmute.svg';
import video from '../../assets/video.svg';
import novideo from '../../assets/no-video.svg';
import Message from './Message/Message';
import './Message/Message.css';
import './VideoChat.css';

const socket = io('http://localhost:5000');

const VideoChat = () => {
  const peer = new Peer();
  const peers: any = {};
  const location = useLocation<any>();

  const myVideo = useRef<any>();
  const partnerVideo = useRef<any>();
  const [statusPartner, setStatusPartner] = useState(false);
  const [textCameraUser, setTextCameraUser] = useState<any>();
  const [textCameraPartner, setTextCameraPartner] = useState<any>();

  const [username, setUsername] = useState('');
  const [partnername, setPartnername] = useState('');
  const [secondsdisplay, setSecondsdisplay] = useState('00');
  const [minutesdisplay, setMinutesdisplay] = useState('00');
  const [hoursdisplay, setHoursdisplay] = useState('00');
  const [audiobutton, setAudiobutton] = useState<any>();
  const [videobutton, setVideobutton] = useState<any>();
  const {
    seconds,
    minutes,
    hours,
    start,
  } = useStopwatch({ autoStart: false });
  const [message, setMessage] = useState<any>();
  const [messages, setMessages] = useState<any[]>([]);
  const messageEl = useRef<any>();
  const [name, setName] = useState<any>();

  const muteUnmute = () => {
    const { enabled } = myVideo.current.srcObject.getAudioTracks()[0];
    if (enabled) {
      setAudiobutton(unmute);
      myVideo.current.srcObject.getAudioTracks()[0].enabled = false;
    } else {
      setAudiobutton(mute);
      myVideo.current.srcObject.getAudioTracks()[0].enabled = true;
    }
  };
  const videoNovideo = () => {
    const { enabled } = myVideo.current.srcObject.getVideoTracks()[0];
    if (enabled) {
      setVideobutton(video);
      myVideo.current.srcObject.getVideoTracks()[0].enabled = false;
    } else {
      setVideobutton(novideo);
      myVideo.current.srcObject.getVideoTracks()[0].enabled = true;
    }
    setTextCameraUser(!textCameraUser);
  };
  const sendMessage = (e : any) => {
    e.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };
  const connectToNewUser = (userId: string, stream: MediaStream) => {
    const call = peer.call(userId, stream);
    call.on('stream', (stream) => {
      partnerVideo.current.srcObject = stream;
      setStatusPartner(true);
    });
    call.on('close', () => {
      partnerVideo.current.srcObject = null;
      setStatusPartner(false);
    });
    peers[userId] = call;
  };

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      myVideo.current.srcObject = stream;
      if (!location.state.propertyaudio) {
        myVideo.current.srcObject.getAudioTracks()[0].enabled = false;
        setAudiobutton(unmute);
      } else {
        setAudiobutton(mute);
      }
      if (!location.state.propertyvideo) {
        myVideo.current.srcObject.getVideoTracks()[0].enabled = false;
        setTextCameraUser(true);
        setVideobutton(video);
      } else {
        setVideobutton(novideo);
      }

      socket.on('user-connected', (userId) => {
        connectToNewUser(userId, stream);
      });

      peer.on('call', (call) => {
        call.answer(stream);
        call.on('stream', (stream) => {
          partnerVideo.current.srcObject = stream;
          setStatusPartner(true);
        });
      });
    });

    peer.on('open', (id) => {
      socket.emit('join-room', '123456', id);
      setName(id);
    });

    socket.on('user-disconnected', (userId) => {
      partnerVideo.current.srcObject = null;
      setStatusPartner(false);
      if (peers[userId]) peers[userId].close();
    });

    // ==========================================
    // if (startanswer === true || startcall === true) {
    //   start()
    //   if (String(seconds).length === 1) {
    //     setSecondsdisplay('0' + String(seconds))
    //   } else {
    //     setSecondsdisplay(String(seconds))
    //   }
    //   if (String(minutes).length === 1) {
    //     setMinutesdisplay('0' + String(minutes))
    //   } else {
    //     setMinutesdisplay(String(minutes))
    //   }
    //   if (String(hours).length === 1) {
    //     setHoursdisplay('0' + String(hours))
    //   } else {
    //     setHoursdisplay(String(hours))
    //   }
    // }

    async function callBackendAPI() {
      const response = await fetch('/info_videocall');
      const res = await response.json();
      setUsername(res.username);
      setPartnername(res.partnername);
      if (response.status !== 200) {
        throw Error(res.message);
      }
      return res;
    }

    callBackendAPI();
  }, []);

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener('DOMNodeInserted', (event: { currentTarget: any; }) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
    socket.on('message', (message, name) => {
      setMessages((messages) => [...messages, message]);
      console.log(name);
    });
  }, []);

  // ===============================

  return (
    <div className="main">
      {/* ====================VideoCall====================== */}
      <div className="mainLeft">
        <div className="mainVideosTop">
          <span className="userImage">
            <img src={doctor} alt="User ava" />
          </span>
          <div id="userCall">{username}</div>
          {statusPartner ? (
            <div className="notification">
              {name}
              {' '}
              connected
            </div>
          ) : ''}
        </div>
        <div className="mainVideos">
          <div className="partnerScreenvideo">
            {!statusPartner ? <div className="statusPartner">Waiting for a partner to connect ...</div> : ''}
            {/* {textCameraPartner? <div className="textCameraPartner">{partnername}</div> : ""} */}
            <video className="partnerScreenvideotag" ref={partnerVideo} autoPlay />
          </div>
          <div className="userScreenvideo">
            {textCameraUser ? <div className="textCameraUser">{username}</div> : ''}
            <video className="userScreenvideotag" ref={myVideo} autoPlay />
          </div>
        </div>
        <div className="mainVideosBottom">
          <div className="partnerName" id="partnerName">{partnername}</div>
          {/* <div className="duration"> */}
          {/* <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span> */}
          {/* <span>{hoursdisplay}</span>:<span>{minutesdisplay}</span>:<span>{secondsdisplay}</span> */}
          {/* </div> */}
        </div>
        <div className="mainControls">
          <div className="mainControlsBlock">
            <div className="mainControlsButton mainMuteButton" onClick={muteUnmute} onKeyPress={muteUnmute} role="button" tabIndex={0}>
              <img className="mute-image" src={audiobutton} alt="mute" />
            </div>
            <div className="mainControlsButtonEndMeeting">
              <span className="endMeeting">
                <a href="/videochat">
                  <img className="mute-phone" src={phone} alt="Hand Up" />
                </a>
              </span>
            </div>
            <div className="mainControlsButton mainVideoButton" onClick={videoNovideo} onKeyPress={muteUnmute} role="button" tabIndex={0}>
              <img className="video-image" src={videobutton} alt="video" />
            </div>
          </div>
        </div>
      </div>
      {/* ====================ChatBox====================== */}
      <div className="mainRight">
        <div className="mainHeader">
          <span><WechatOutlined /></span>
          <h3>Chat Box</h3>
        </div>
        <div className="mainChatWindow">
          <div className="messages" ref={messageEl}>
            {messages.map((message, i) => <div key={i}><Message message={message} userId={name} /></div>)}
          </div>
        </div>
        <div className="mainMessageContainer">
          <form className="formChatMesseage">
            <div className="inputchatMessage">
              <input
                id="chatMessage"
                type="text"
                placeholder="Type message here..."
                value={message || ''}
                onChange={({ target: { value } }) => setMessage(value)}
                onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
              />
              <span className="buttonSendMessage">
                <button id="sendMessage" onClick={(e) => sendMessage(e)}><SendOutlined /></button>
              </span>
            </div>
          </form>
        </div>
      </div>
      {/* ====================End----VideoChat====================== */}
    </div>
  );
};

export default VideoChat;
