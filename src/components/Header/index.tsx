import React, { useState } from 'react';
import { Layout, Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope } from '@fortawesome/free-regular-svg-icons';

import './style.scss';
import { useLocation, useRouteMatch } from 'react-router-dom';
// import { useDate } from '../../hooks/useDate';
import AvatarModal from '../Modals/Avatar';

interface Props {}

const { Header } = Layout;
// const { Search } = Input;

const HeaderLayout: React.FC<Props> = () => {
  // const { date, time } = useDate();
  const location = useLocation();
  const [isModalVisible, setIsModalVisible] = useState(false);

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
          {/* <Search className="nar-search" placeholder="Search..." /> */}
          {/* <div className="date-time-nar-bar">{`${date}, ${time}`}</div> */}
        </div>
        <div className="right-nar-bar">
          <FontAwesomeIcon className="IconSection" icon={faBell} size="2x" />
          <FontAwesomeIcon
            className="IconSection"
            icon={faEnvelope}
            size="2x"
          />
          <button onClick={showModal} className="avatar-profile" />
          <AvatarModal
            visible={isModalVisible}
            handleCancelDropAvatar={handleCancelDropAvatar}
          />
        </div>
      </Header>
    </>
  );
};

export default HeaderLayout;
