/* eslint-disable no-console */
/* eslint-disable jsx-a11y/media-has-caption */
import { useState, useRef, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import doctor from '../../../assets/doctor.png';
import mute from '../../../assets/mute.svg';
import unmute from '../../../assets/unmute.svg';
import video from '../../../assets/video.svg';
import novideo from '../../../assets/no-video.svg';
import './style.scss';
import Canvas from '../Canvas';
import { IRootState } from '../../../stores/store';
import appointmentAction from '../../../stores/actions/appointment.action';

const JoinRoom = () => {
  const myVideo = useRef<any>();
  const [textCamera, setTextCamera] = useState(true);
  const [propertyaudio, setPropertyaudio] = useState(true);
  const [propertyvideo, setPropertyvideo] = useState(true);
  const myVideoSize = { width: '740', height: '456' };
  const { appointmentId } = useParams<{ appointmentId: string }>();
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, appointment } = useSelector((state: IRootState) => ({
    user: state.authentication.user,
    appointment: state.appointment.appointment,
  }));

  useEffect(() => {
    console.log('Zo day : ', appointmentId);
    dispatch(appointmentAction.getAppointment(appointmentId));
  },
  []);

  const muteUnmute = () => {
    const { enabled } = myVideo.current.srcObject.getAudioTracks()[0];
    if (enabled) {
      myVideo.current.srcObject.getAudioTracks()[0].enabled = false;
      setPropertyaudio(false);
    } else {
      myVideo.current.srcObject.getAudioTracks()[0].enabled = true;
      setPropertyaudio(true);
    }
  };

  const videoNovideo = () => {
    const { enabled } = myVideo.current.srcObject.getVideoTracks()[0];
    if (enabled) {
      myVideo.current.srcObject.getVideoTracks()[0].enabled = false;
      setPropertyvideo(false);
    } else {
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
      }).catch((err) => {
        console.log(`got an error: ${err}`);
      });
  }, []);

  const functionDirect = () => {
    history.push('/app/appointment');
  };
  // ===============================

  return (
    <div className="wrap-joinRoom">
      <div className="mainJoinRoom">
        <div className="mainTop">
          <span>
            <img src={doctor} alt="User ava" />
            <p>Room: {appointment?.name}</p>
          </span>
        </div>
        <div className="mainBottom">
          <div className="userScreenBlock">
            {!textCamera ? <div className="CameraOff">Camera is off</div> : ''}
            <div className="mainControlsJoinRoom">
              {propertyaudio ? (
                <div className="mainControlsButtonJoinRoom mainMuteButton unmute" onClick={muteUnmute} onKeyPress={muteUnmute} role="button" tabIndex={0}>
                  <img className="mute-image" src={unmute} alt="unmute" />
                </div>
              ) : (
                <div className="mainControlsButtonJoinRoom mainMuteButton mute" onClick={muteUnmute} onKeyPress={muteUnmute} role="button" tabIndex={0}>
                  <img className="mute-image" src={mute} alt="mute" />
                </div>
              )}
              {propertyvideo ? (
                <div className="mainControlsButtonJoinRoom mainVideoButton" onClick={videoNovideo} onKeyPress={videoNovideo} role="button" tabIndex={0}>
                  <img className="video-image" src={video} alt="video" />
                </div>
              ) : (
                <div className="mainControlsButtonJoinRoom mainVideoButton mute" onClick={videoNovideo} onKeyPress={videoNovideo} role="button" tabIndex={0}>
                  <img className="mute-image" src={novideo} alt="novideo" />
                </div>
              )}
            </div>
            <video ref={myVideo} autoPlay />
            <Canvas videoRef={myVideo} size={myVideoSize} className="userScreenJoinRoom" />
          </div>
          <div className="joinButton">
            <div className="ready">
              Ready to join?
            </div>
            <div className="twoButton">
              <Link
                // onClick={(e) => ((!userid) ? e.preventDefault() : null)}
                to={{
                  pathname: `/appointment/${appointment?._id}/join`,
                  state: {
                    propertyaudio,
                    propertyvideo,
                  },
                }}
              >
                <button className="btnJoinroom" type="submit">Join now</button>
              </Link>
              <button onClick={functionDirect} className="btnBack">Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinRoom;
