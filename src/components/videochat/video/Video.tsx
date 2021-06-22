import './Video.css';
import { VideoCameraOutlined,AudioMutedOutlined } from '@ant-design/icons';
import { useState,useRef, useEffect}  from 'react';
import { useStopwatch } from 'react-timer-hook';
import Peer from 'peerjs';
import io from "socket.io-client"


// const socket = io('http://localhost:5000')
const peer = new Peer()

const Video = () => {

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

  const [inputpeer,setInputpeer]=useState("");
  const [mypeer, setMypeer] = useState('');

  const {
    seconds,
    minutes,
    hours,
    start
  } = useStopwatch({ autoStart: false });

  function callPeer(){
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
    if(startanswer === false){
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


    if(count === 1){
      peer.on('open', id => {
        setMypeer(id)
      })
      setCount(count+1)
    }

// ==========================================
    if( startanswer === true || startcall === true){
      start()
      if(String(seconds).length === 1){
        setSecondsdisplay('0'+String(seconds))
      }else{
        setSecondsdisplay(String(seconds))
      }
      if(String(minutes).length === 1){
        setMinutesdisplay('0'+String(minutes))
      }else{
        setMinutesdisplay(String(minutes))
      }
      if(String(hours).length === 1){
        setHoursdisplay('0'+String(hours))
      }else{
        setHoursdisplay(String(hours))
      }
    }
        

    async function callBackendAPI (){
      const response = await fetch('/info_videocall');
      const res = await response.json();
      setUsername(res.username)
      setPartnername(res.partnername)
      if (response.status !== 200) {
        throw Error(res.message) 
      }
      return res;
    };

    callBackendAPI()

  })
// ===============================

  return (
    <div className="mainLeft">
    <div className="mainVideosTop">
      <span className="userImage">
        <img src="doctor.png" alt="User ava"/>
      </span>
      <div id="userCall">{username}</div>
      <div className="idcaller">ID Call: {mypeer}</div>
     <input type="text" id="remoteId" placeholder="Remote ID" onChange={e => setInputpeer(e.target.value)} />
        <button id="btnCall" onClick={callPeer}>Call</button>
    </div>
    <div className="mainVideos">
    {/* id="videoGrid" */}
      {/* <div className="userScreen" >  */}
      <div className="userScreen" > 
      <video className="userScreenvideotag" muted ref={myVideo} autoPlay  />
      </div>
      <div className="partnerScreen" >
        <video className="partnerScreenvideotag" muted ref={partnerVideo} autoPlay  />
        </div>

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
        <div  className="mainControlsButton mainMuteButton">
          <AudioMutedOutlined />
        </div>

        <div className="mainControlsButtonEndMeeting">
           <span className="endMeeting">
             <img src="phone.png" alt="Hand Up"/>
           </span>
        </div>
        {/* onClick="playStop()" */}
        <div  className="mainControlsButton mainVideoButton">
          <VideoCameraOutlined />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Video;


