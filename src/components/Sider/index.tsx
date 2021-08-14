import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  CalendarOutlined,
  CommentOutlined,
  DollarOutlined,
  TeamOutlined,
  FileProtectOutlined,
  ProfileOutlined,
} from '@ant-design/icons';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './style.scss';
import { useSelector } from 'react-redux';
import { routes } from '../../pages/app/routes';
import { IRootState } from '../../stores/store';

const { Sider } = Layout;
const { Item } = Menu;

interface Props {
  matchPath: string;
}

const MenuItem = (path: string, index: number, matchPath: string, currentPath: string) => {
  let icon;
  let name;

  switch (path) {
    case matchPath + routes[0].path: {
      icon = <AppstoreOutlined style={{ fontSize: '28px' }} />;
      name = 'Dashboard';
      break;
    }

    case matchPath + routes[1].path: {
      icon = <CalendarOutlined className="icon-dashboard" />;
      name = 'Appointment';
      break;
    }

    case matchPath + routes[2].path: {
      icon = <TeamOutlined className="icon-dashboard" />;
      name = 'Doctor';
      break;
    }

    case matchPath + routes[3].path: {
      icon = <FileProtectOutlined className="icon-dashboard" />;
      name = 'Psychology Test';
      break;
    }

    case matchPath + routes[4].path: {
      icon = <CommentOutlined className="icon-dashboard" />;
      name = 'Forum Question';
      break;
    }

    case matchPath + routes[5].path: {
      icon = <ProfileOutlined className="icon-dashboard" />;
      name = 'Feedback';
      break;
    }

    case matchPath + routes[6].path: {
      icon = <DollarOutlined className="icon-dashboard" />;
      name = 'Payment';
      break;
    }

    default: {
      break;
    }
  }

  return (
    <Item
      key={index}
      className={`custom-menu-item${currentPath === path ? ' active' : ''}`}
      icon={icon}
    >
      <Link to={path}>{name}</Link>
    </Item>
  );
};

const SiderMenu: React.FC<Props> = ({ matchPath }: Props) => {
  const history = useHistory();
  const location = useLocation();
  const user = useSelector((state: IRootState) => state.authentication.user);

  const redirectToApp = () => {
    history.push('/');
  };

  return (
    <>
      <Sider
        trigger={null}
        collapsible
        className="custom-sider"
        width="250"
      >
        <div className="sider-logo" onClick={redirectToApp}>
          {/* <p>PsyCare.</p> */}
          <div className="logo-dashboard" />
        </div>
        <Menu className="custom-menu">
          {routes
            .filter((r) => !(r.doctorHidden && user?.role === 'doctor') && !r.sideBarHidden)
            .map((route, index) => MenuItem(`${matchPath}${route.path}`, index, matchPath, location.pathname))}
        </Menu>
      </Sider>
    </>
  );
};

export default SiderMenu;
