import './VideoChat.css';
import { VideoCameraOutlined, AudioMutedOutlined } from '@ant-design/icons';
import { useState, useRef, useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';
import { WechatOutlined,SendOutlined } from '@ant-design/icons';
import Peer from 'peerjs';
import io from "socket.io-client"
import doctor from "../../assets/doctor.png"
import phone from "../../assets/phone.png"

// const socket = io('http://localhost:5000')
const peer = new Peer()

const VideoChat = () => {

  const myVideo = useRef() as React.MutableRefObject<HTMLVideoElement>;
  const partnerVideo = useRef() as React.MutableRefObject<HTMLVideoElement>;
  const [username, setUsername] = useState('');
  const [partnername, setPartnername] = useState('');
  const [secondsdisplay, setSecondsdisplay] = useState('00');
  const [minutesdisplay, setMinutesdisplay] = useState('00');
  const [hoursdisplay, setHoursdisplay] = useState('00');
  const [count, setCount] = useState(1);
  const [startcall, setStartcall] = useState(false);
  const [startanswer, setStartanswer] = useState(false);
  const [inputpeer, setInputpeer] = useState("");
  const [mypeer, setMypeer] = useState('');

  const {
    seconds,
    minutes,
    hours,
    start
  } = useStopwatch({ autoStart: false });

  function callPeer() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      myVideo.current.srcObject = stream;
      const call = peer.call(inputpeer, stream);
      call.on('stream', (stream) => {
        partnerVideo.current.srcObject = stream;
        setStartcall(true)
      })
    }, (err) => {
      console.error('Failed to get local stream', err);
    });
  }


  useEffect(() => {

    if (startanswer === false) {
      peer.on('call', (call) => {
        setStartanswer(true)
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
          call.answer(stream);
          myVideo.current.srcObject = stream;
          call.on('stream', (stream) => {
            partnerVideo.current.srcObject = stream;
          });
        }, (err) => {
          console.error('Failed to get local stream', err);
        });
      })
    }

    if (count === 1) {
      peer.on('open', id => {
        setMypeer(id)
      })
      setCount(count + 1)
    }

    // ==========================================
    if (startanswer === true || startcall === true) {
      start()
      if (String(seconds).length === 1) {
        setSecondsdisplay('0' + String(seconds))
      } else {
        setSecondsdisplay(String(seconds))
      }
      if (String(minutes).length === 1) {
        setMinutesdisplay('0' + String(minutes))
      } else {
        setMinutesdisplay(String(minutes))
      }
      if (String(hours).length === 1) {
        setHoursdisplay('0' + String(hours))
      } else {
        setHoursdisplay(String(hours))
      }
    }

    async function callBackendAPI() {
      const response = await fetch('/info_videocall');
      const res = await response.json();
      setUsername(res.username)
      setPartnername(res.partnername)
      if (response.status !== 200) {
        throw Error(res.message)
      }
      return res;
    };

    // callBackendAPI()

  })
  // ===============================

  return (
    <div className="main">

      {/* ====================VideoCall======================*/}
      <div className="mainLeft">
        <div className="mainVideosTop">
          <span className="userImage">
            <img src={doctor} alt="User ava" />
          </span>
          <div id="userCall">{username}</div>
          <div className="idcaller">ID Call: {mypeer}</div>
          <input type="text" id="remoteId" placeholder="Remote ID" onChange={e => setInputpeer(e.target.value)} />
          <button id="btnCall" onClick={callPeer}>Call</button>
        </div>
        <div className="mainVideos">
            <video className="partnerScreenvideotag" muted ref={partnerVideo} autoPlay />
            <video className="userScreenvideotag" muted ref={myVideo} autoPlay />
        </div>
        <div className="mainVideosBottom">
          <div className="partnerName" id="partnerName">{partnername}</div>
          <div className="duration">
            <span>{hoursdisplay}</span>:<span>{minutesdisplay}</span>:<span>{secondsdisplay}</span>
          </div>
        </div>
        <div className="mainControls">
          <div className="mainControlsBlock">
            {/* onClick="muteUnmute()" */}
            <div className="mainControlsButton mainMuteButton">
              <AudioMutedOutlined />
            </div>

            <div className="mainControlsButtonEndMeeting">
              <span className="endMeeting">
                <img src={phone} alt="Hand Up" />
              </span>
            </div>
            {/* onClick="playStop()" */}
            <div className="mainControlsButton mainVideoButton">
              <VideoCameraOutlined />
            </div>
          </div>
        </div>
      </div>

      {/* ====================ChatBox======================*/}
      <div className="mainRight">  
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

    </div>
  );
}

export default VideoChat;


