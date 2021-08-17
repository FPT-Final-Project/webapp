import React, { useState } from 'react';
import { Layout, Image } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './style.scss';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AvatarModal from '../Modals/Avatar';
import { IRootState } from '../../stores/store';

interface Props {}

const { Header } = Layout;

const HeaderLayout: React.FC<Props> = () => {
  const location = useLocation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { user } = useSelector((state : IRootState) => state.authentication);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancelDropAvatar = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Header className="app-header">
        <div className="left-nar-bar">
          <p className="app-header-title">{location.pathname.split('/')[2]}</p>
        </div>
        <div className="right-nar-bar">
          <FontAwesomeIcon className="IconSection" icon={faBell} size="2x" />
          <FontAwesomeIcon
            className="IconSection"
            icon={faEnvelope}
            size="2x"
          />
          <p>{user?.name}</p>
          <Image src={user?.avatar || '/avatarDefault.png'} onClick={() => showModal()} alt="avatar" className="avatar-profile" preview={false} />
          <AvatarModal
            visible={isModalVisible}
            handleCancelDropAvatar={() => handleCancelDropAvatar()}
          />
        </div>
      </Header>
    </>
  );
};

export default HeaderLayout;
