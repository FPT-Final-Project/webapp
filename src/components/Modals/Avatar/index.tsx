/* eslint-disable max-len */
import React from 'react';
import { Modal } from 'antd';
import './style.scss';

interface Props {
  visible: boolean;
  handleCancelDropAvatar: () => void
}

const AvatarModal: React.FC<Props> = ({ visible, handleCancelDropAvatar }: Props) => (
  <>
    <Modal
      className="AvatarModal"
      onCancel={handleCancelDropAvatar}
      visible={visible}
      closable={false}
      mask={false}
      footer={null}
    >
      <div className="Option">
        {/* <FontAwesomeIcon icon={faUser}/> */}
        <i className="fas fa-user-alt" />
        <span> My Profile</span>
      </div>
      <div className="Option">
        {/* <FontAwesomeIcon icon={faUser}/> */}
        <i className="fas fa-lock" />
        <span> Change Password</span>
      </div>
      <div className="Option">
        {/* <FontAwesomeIcon icon={faUser}/> */}
        <i className="fas fa-sign-out-alt" />
        <span> Sign Out</span>
      </div>
    </Modal>
  </>
);

export default AvatarModal;
