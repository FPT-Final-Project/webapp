/* eslint-disable no-empty */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/media-has-caption */
import { useState, useRef, useEffect } from 'react';
import { WechatOutlined, SendOutlined } from '@ant-design/icons';
import Peer from 'peerjs';
import { io } from 'socket.io-client';
import { useLocation, useParams } from 'react-router-dom';
import doctor from '../../../assets/doctor.png';
import phone from '../../../assets/phone.svg';
import mute from '../../../assets/mute.svg';
import unmute from '../../../assets/unmute.svg';
import video from '../../../assets/video.svg';
import novideo from '../../../assets/no-video.svg';
import Message from '../Message';
import './style.scss';
import '../Message/style.scss';
import Canvas from '../Canvas';

const socket = io('http://localhost:3000');

const VideoChat = () => {
  const { userid, room }: any = useParams();
  const peer = new Peer();
  const peers: any = {};
  const listUserInRoom = useState<any[]>([]);
  const location = useLocation<any>();
  const myVideo = useRef<any>();
  const partnerVideo = useRef<any>();
  const [statusPartner, setStatusPartner] = useState(false);
  const [textCameraUser, setTextCameraUser] = useState<any>();
  const [audiobutton, setAudiobutton] = useState<any>();
  const [videobutton, setVideobutton] = useState<any>();
  const [message, setMessage] = useState<any>();
  const [messages, setMessages] = useState<any[]>([]);
  const messageEl = useRef<any>();
  const [partnerid, setPartnerid] = useState<any>();
  const [username, setUsername] = useState('');
  const [partnername, setPartnername] = useState('');

  const muteUnmute = () => {
    const { enabled } = myVideo.current.srcObject.getAudioTracks()[0];
    if (enabled) {
      setAudiobutton(false);
      myVideo.current.srcObject.getAudioTracks()[0].enabled = false;
    } else {
      setAudiobutton(true);
      myVideo.current.srcObject.getAudioTracks()[0].enabled = true;
    }
  };

  const videoNovideo = () => {
    const { enabled } = myVideo.current.srcObject.getVideoTracks()[0];
    if (enabled) {
      myVideo.current.srcObject.getVideoTracks()[0].enabled = false;
      setVideobutton(false);
    } else {
      setVideobutton(true);
      myVideo.current.srcObject.getVideoTracks()[0].enabled = true;
    }
    setTextCameraUser(!textCameraUser);
  };

  const sendMessage = (e: any) => {
    e.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  const connectToNewUser = (id: string, stream: MediaStream) => {
    const call = peer.call(id, stream);
    call.on('stream', (stream) => {
      partnerVideo.current.srcObject = stream;
      setStatusPartner(true);
    });
    call.on('close', () => {
      partnerVideo.current.srcObject = null;
      setStatusPartner(false);
    });
    peers[userid] = call;
  };

  const userInRoom = () => {
    socket.on('getUsersInRoom', (listUserInRoom) => {
      listUserInRoom.forEach((id: any) => {
        if (String(id) !== String(userid)) {
          setPartnerid(id);
        }
      });
    });
  };

  useEffect(() => {
    if (userid === '1') {
      setUsername('Bao');
    } else if (userid === '2') {
      setUsername('Long');
    }
    peer.on('open', (peerid) => {
      socket.emit('join-room', room, userid, peerid);
    });
  }, []);

  useEffect(() => {
    userInRoom();
    if (partnerid === '1') {
      setPartnername('Bao');
    } else if (partnerid === '2') {
      setPartnername('Long');
    }
  }, [listUserInRoom]);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      myVideo.current.srcObject = stream;
      if (!location.state.propertyaudio) {
        myVideo.current.srcObject.getAudioTracks()[0].enabled = false;
        setAudiobutton(false);
      } else {
        setAudiobutton(true);
      }
      if (!location.state.propertyvideo) {
        myVideo.current.srcObject.getVideoTracks()[0].enabled = false;
        setTextCameraUser(true);
        setVideobutton(false);
      } else {
        setVideobutton(true);
      }
      socket.on('user-connected', (partnerid, partnerpeerId) => {
        if (partnerid === '1') {
          setPartnername('Bao');
        } else if (partnerid === '2') {
          setPartnername('Long');
        }
        setPartnerid(partnerid);
        connectToNewUser(partnerpeerId, stream);
      });
      peer.on('call', (call) => {
        call.answer(stream);
        call.on('stream', (stream) => {
          partnerVideo.current.srcObject = stream;
          setStatusPartner(true);
        });
      });
    });
    socket.on('user-disconnected', (partnerid) => {
      partnerVideo.current.srcObject = null;
      setStatusPartner(false);
      setPartnerid(null);
      setPartnername('');
      if (peers[partnerid]) peers[partnerid].close();
    });
  }, []);

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener('DOMNodeInserted', (event: { currentTarget: any; }) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
    socket.on('message', (message) => {
      setMessages((premessages) => [...premessages, message]);
    });
  }, []);

  return (
    // <div className="wrap-videoCall">
    <div className="main-video">
      {/* ====================VideoCall====================== */}
      <div className="mainLeft">
        <div className="mainVideosTop">
          <span className="userImage">
            <img src={doctor} alt="User ava" />
          </span>
          <div id="userCall">{username}</div>
          {statusPartner ? (
            <div className="notification">
              {partnername}
              {' '}
                Connected
            </div>
          ) : ''}
        </div>
        <div className="mainVideos">
          <div className="partnerScreenvideo">
            {!statusPartner ? <div className="statusPartner">Waiting for a partner to connect ...</div> : ''}
            <video ref={partnerVideo} autoPlay />
            {!statusPartner ? '' : <Canvas videoRef={partnerVideo} className="partnerScreenvideotag" />}
            <div className="userScreenvideo">
              <video ref={myVideo} autoPlay />
              <Canvas videoRef={myVideo} className="userScreenvideotag" />
              {textCameraUser ? <div className="textCameraUser">{username}</div> : ''}
            </div>
          </div>
        </div>
        <div className="mainVideosBottom">
          <div className="partnerName" id="partnerName">{partnername}</div>
        </div>
        <div className="mainControlsVideo">
          <div className="mainControlsBlock">
            {audiobutton ? (
              <div className="mainControlsButton mainMuteButton unmute" onClick={muteUnmute} onKeyPress={muteUnmute} role="button" tabIndex={0}>
                <img className="mute-img" src={unmute} alt="unmute" />
              </div>
            ) : (
              <div className="mainControlsButton mainMuteButton mute" onClick={muteUnmute} onKeyPress={muteUnmute} role="button" tabIndex={0}>
                <img className="mute-img" src={mute} alt="mute" />
              </div>
            )}
            <div className="mainControlsButtonEndMeeting">
              <span className="endMeeting">
                <a href="/appointment/123456/start">
                  <img className="mute-phone" src={phone} alt="Hand Up" />
                </a>
              </span>
            </div>
            {videobutton ? (
              <div className="mainControlsButton mainVideoButton video" onClick={videoNovideo} onKeyPress={videoNovideo} role="button" tabIndex={0}>
                <img className="video-img" src={video} alt="video" />
              </div>
            ) : (
              <div className="mainControlsButton mainVideoButton novideo" onClick={videoNovideo} onKeyPress={videoNovideo} role="button" tabIndex={0}>
                <img className="mute-img" src={novideo} alt="novideo" />
              </div>
            )}
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
            {messages.map((message, i) => <div key={i}><Message message={message} myname={username} /></div>)}
          </div>
        </div>
        <div className="mainMessageContainer">
          <div className="inputchatMessage">
            <input
              id="chatMessage"
              type="text"
              placeholder="Type message here..."
              value={message || ''}
              onChange={({ target: { value } }) => setMessage(value)}
              onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
            />
          </div>
          <div className="buttonSendMessage">
            <button id="sendMessage" onClick={(e) => sendMessage(e)}><SendOutlined /></button>
          </div>
        </div>
      </div>
      {/* ====================End----VideoChat====================== */}
    </div>
    // </div>
  );
};

export default VideoChat;
