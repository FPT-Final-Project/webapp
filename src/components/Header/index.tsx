import { useState } from 'react';
import { Layout, Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope } from '@fortawesome/free-regular-svg-icons';

import './style.scss';
import { useDate } from '../../hooks/useDate';
import AvatarModal from '../Modals/Avatar';

const { Header } = Layout;
const { Search } = Input;

export default function HeaderLayout() {
  const { date, time } = useDate();
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
        </div>
        <AvatarModal
          visible={isModalVisible}
          handleCancelDropAvatar={handleCancelDropAvatar}
        />
      </Header>
    </>
  );
}
