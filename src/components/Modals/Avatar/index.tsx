import React from "react";
import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import "./style.scss"
interface Props {
  visible: boolean;
  handleCancelDropAvatar: () => void
}
const AvatarModal: React.FC<Props> = ({ visible, handleCancelDropAvatar }) => {
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
        <div className="Option">
            {/* <FontAwesomeIcon icon={faUser}/> */}
            <i className="fas fa-user-alt"></i>
            <span> My Profile</span>
        </div>
        <div className="Option">
            {/* <FontAwesomeIcon icon={faUser}/> */}
            <i className="fas fa-lock"></i>
            <span> Change Password</span>
        </div>
        <div className="Option">
            {/* <FontAwesomeIcon icon={faUser}/> */}
            <i className="fas fa-sign-out-alt"></i>
            <span> Sign Out</span>
        </div>
      </Modal>
    </>
  );
};

export default AvatarModal;
