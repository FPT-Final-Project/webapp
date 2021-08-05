/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Modal } from 'antd';
import './style.scss';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import userService from '../../../services/user.service';
import authAction from '../../../stores/actions/auth.action';

interface Props {
  visible: boolean;
  handleCancelDropAvatar: () => void
}

const AvatarModal: React.FC<Props> = ({ visible, handleCancelDropAvatar }: Props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authAction.logout);
    history.push('/');
  };

  return (
    <>
      <Modal
        className="AvatarModal"
        onCancel={handleCancelDropAvatar}
        visible={visible}
        closable={false}
        mask={false}
        footer={null}
      >
        <Link to="/profileUser" className="Option">
          {/* <FontAwesomeIcon icon={faUser}/> */}
          <i className="fas fa-user-alt" />
          <span>&nbsp;My Profile</span>
        </Link>
        <div className="Option">
          {/* <FontAwesomeIcon icon={faUser}/> */}
          <i className="fas fa-lock" />
          <span>&nbsp;Change Password</span>
        </div>
        <div className="Option">
          {/* <FontAwesomeIcon icon={faUser}/> */}
          <i className="fas fa-sign-out-alt" />
          <span onClick={() => handleLogout()}>&nbsp;Sign Out</span>
        </div>
      </Modal>
    </>
  );
};

export default AvatarModal;
