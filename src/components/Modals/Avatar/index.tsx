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
            <FontAwesomeIcon icon={faUser}/>
            <span> Profile</span>
        </div>
        <div className="Option">
            <FontAwesomeIcon icon={faUser}/>
            <span> Change Password</span>
        </div>
        <div className="Option">
            <FontAwesomeIcon icon={faUser}/>
            <span> Logout</span>
        </div>
      </Modal>
    </>
  );
};

export default AvatarModal;
