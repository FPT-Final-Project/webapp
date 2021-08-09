/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/media-has-caption */
import { useState, useRef, useEffect } from 'react';
import { WechatOutlined, SendOutlined } from '@ant-design/icons';
import Peer from 'peerjs';
import { io } from 'socket.io-client';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
import { IRootState } from '../../../stores/store';
import appConfig from '../../../config/app.config';

const socket = io(appConfig.appUrl || '');

const VideoChat = () => {
  const { appointmentId } = useParams<{ appointmentId: string }>();
  const { user } = useSelector((state: IRootState) => ({ user: state.authentication.user }));
  const peer = new Peer();
  const peers: any = {};
  const listUserInRoom = useState<any[]>([]);
  const location = useLocation<any>();
  const myVideo = useRef<any>(null);
  const partnerVideo = useRef<any>(null);
  const [statusPartner, setStatusPartner] = useState(false);
  const [textCameraUser, setTextCameraUser] = useState<any>();
  const [audioButton, setAudioButton] = useState<any>();
  const [videoButton, setVideoButton] = useState<any>();
  const [message, setMessage] = useState<any>();
  const [messages, setMessages] = useState<any[]>([]);
  const messageEl = useRef<any>();
  const [partnerId, setPartnerId] = useState<any>();
  const [partnerName, setPartnerName] = useState('');

  const muteUnmute = () => {
    const { enabled } = myVideo.current.srcObject.getAudioTracks()[0];
    if (enabled) {
      setAudioButton(false);
      myVideo.current.srcObject.getAudioTracks()[0].enabled = false;
    } else {
      setAudioButton(true);
      myVideo.current.srcObject.getAudioTracks()[0].enabled = true;
    }
  };

  const videoNovideo = () => {
    const { enabled } = myVideo.current.srcObject.getVideoTracks()[0];
    if (enabled) {
      myVideo.current.srcObject.getVideoTracks()[0].enabled = false;
      setVideoButton(false);
    } else {
      setVideoButton(true);
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
    if (user) {
      const call = peer.call(id, stream);
      call.on('stream', (stream) => {
        partnerVideo.current.srcObject = stream;
        setStatusPartner(true);
      });

      call.on('close', () => {
        partnerVideo.current.srcObject = null;
        setStatusPartner(false);
      });
      peers[user._id] = call;
    }
  };

  const userInRoom = () => {
    socket.on('getUsersInRoom', (listUserInRoom) => {
      const partner = listUserInRoom.find((person: { id: any, name: any }) => person.id !== user?._id);
      if (partner) {
        setPartnerId(partner.id);
        setPartnerName(partner.name);
      }
    });
  };

  useEffect(() => {
    peer.on('open', (peerId) => {
      socket.emit('join-room', appointmentId, user?._id, user?.name, peerId);
    });
  }, []);

  useEffect(() => {
    userInRoom();
  }, [listUserInRoom]);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      myVideo.current.srcObject = stream;
      if (!location.state.propertyaudio) {
        myVideo.current.srcObject.getAudioTracks()[0].enabled = false;
        setAudioButton(false);
      } else {
        setAudioButton(true);
      }
      if (!location.state.propertyvideo) {
        myVideo.current.srcObject.getVideoTracks()[0].enabled = false;
        setTextCameraUser(true);
        setVideoButton(false);
      } else {
        setVideoButton(true);
      }
      socket.on('user-connected', (partnerId, partnerName, partnerPeerId) => {
        setPartnerId(partnerId);
        setPartnerName(partnerName);
        connectToNewUser(partnerPeerId, stream);
      });
      peer.on('call', (call) => {
        call.answer(stream);
        call.on('stream', (stream) => {
          partnerVideo.current.srcObject = stream;
          setStatusPartner(true);
        });
      });
    });
    socket.on('user-disconnected', (partnerId) => {
      partnerVideo.current.srcObject = null;
      setStatusPartner(false);
      setPartnerId(null);
      setPartnerName('');
      if (peers[partnerId]) peers[partnerId].close();
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
      setMessages((preMessages) => [...preMessages, message]);
    });
  }, []);

  return (
    <div className="main-video">
      {/* ====================VideoCall====================== */}
      <div className="mainLeft">
        <div className="mainVideosTop">
          <span className="userImage">
            <img src={doctor} alt="User ava" />
          </span>
          <div id="userCall">{user?.name}</div>
          {statusPartner ? (
            <div className="notification">
              {partnerName}
              {' '}
                Connected
            </div>
          ) : ''}
        </div>
        <div className="mainVideos">
          <div className="partnerScreenvideo">
            {!statusPartner ? <div className="statusPartner">Waiting for a partner to connect ...</div> : ''}
            <video ref={partnerVideo} playsInline autoPlay />
            {!statusPartner ? '' : <Canvas videoRef={partnerVideo} className="partnerScreenvideotag" />}
            <div className="userScreenvideo">
              <video ref={myVideo} playsInline muted />
              <Canvas videoRef={myVideo} className="userScreenvideotag" />
              {textCameraUser ? <div className="textCameraUser">{user?.name}</div> : ''}
            </div>
          </div>
        </div>
        <div className="mainVideosBottom">
          <div className="partnerName" id="partnerName">{partnerName}</div>
        </div>
        <div className="mainControlsVideo">
          <div className="mainControlsBlock">
            {audioButton ? (
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
                <a href="/app/feedback">
                  <img className="mute-phone" src={phone} alt="Hand Up" />
                </a>
              </span>
            </div>
            {videoButton ? (
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
            {messages.map((message, i) => (<div key={i}><Message message={message} userName={user?.name} /></div>))}
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
  );
};

export default VideoChat;
