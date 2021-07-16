/* eslint-disable jsx-a11y/media-has-caption */
import './JoinRoom.css';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import doctor from '../../assets/doctor.png';
import mute from '../../assets/mute.svg';
import unmute from '../../assets/unmute.svg';
import video from '../../assets/video.svg';
import novideo from '../../assets/no-video.svg';

const JoinRoom = () => {
  const myVideo = useRef<any>();
  const [audiobutton, setAudiobutton] = useState(mute);
  const [videobutton, setVideobutton] = useState(novideo);
  const [textCamera, setTextCamera] = useState(true);
  const [propertyaudio, setPropertyaudio] = useState(true);
  const [propertyvideo, setPropertyvideo] = useState(true);

  const muteUnmute = () => {
    const { enabled } = myVideo.current.srcObject.getAudioTracks()[0];
    if (enabled) {
      setAudiobutton(unmute);
      myVideo.current.srcObject.getAudioTracks()[0].enabled = false;
      setPropertyaudio(false);
    } else {
      setAudiobutton(mute);
      myVideo.current.srcObject.getAudioTracks()[0].enabled = true;
      setPropertyaudio(true);
    }
  };

  const videoNovideo = () => {
    const { enabled } = myVideo.current.srcObject.getVideoTracks()[0];
    if (enabled) {
      setVideobutton(video);
      myVideo.current.srcObject.getVideoTracks()[0].enabled = false;
      setPropertyvideo(false);
    } else {
      setVideobutton(novideo);
      myVideo.current.srcObject.getVideoTracks()[0].enabled = true;
      setPropertyvideo(true);
    }
    setTextCamera(!textCamera);
  };

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        myVideo.current.srcObject = stream;
      });
  }, []);

  // ===============================

  return (
    <div className="mainJoinRoom">
      <div className="mainTop">
        <span>
          <img src={doctor} alt="User ava" />
          <p>VideoChat Service</p>
        </span>
      </div>
      <div className="mainBottom">
        <div className="userScreenBlock">
          {!textCamera ? <div className="CameraOff">CAMERA IS OFF</div> : ''}
          <video className="userScreen" ref={myVideo} autoPlay />
        </div>
        <div className="mainControls">
          <div className="mainControlsButton mainMuteButton" onClick={muteUnmute} onKeyPress={muteUnmute} role="button" tabIndex={0}>
            <img className="mute-image" src={audiobutton} alt="mute" />
          </div>
          <div className="joinButton">
            <Link
              to={{
                pathname: '/123456',
                state: {
                  propertyaudio,
                  propertyvideo,
                },
              }}
            >
              <button id="btnJoinroom">JOIN NOW</button>
            </Link>
          </div>
          <div className="mainControlsButton mainVideoButton" onClick={videoNovideo} onKeyPress={videoNovideo} role="button" tabIndex={0}>
            <img className="video-image" src={videobutton} alt="video" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinRoom;
