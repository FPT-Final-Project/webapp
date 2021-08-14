import React from 'react';
import { Spin } from 'antd';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';

const antIcon = <FontAwesomeIcon icon={faSpinner} style={{ fontSize: 55, color: '#1f8ba3' }} spin />;

const Loading: React.FC<{}> = () => (
  <div className="loading-api">
    <Spin indicator={antIcon} />
  </div>
);

export default Loading;
