/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './style.scss';
import { routes } from '../../pages/app/routes';

const { Sider } = Layout;
const { Item } = Menu;

interface Props {
  collapsed?: boolean;
  matchPath: string;
}

const MenuItem = (path: string, index: number, matchPath: string, currentPath: string) => {
  let icon;
  let name;

  switch (path) {
    case matchPath + routes[0].path: {
      icon = <UserOutlined />;
      name = 'Dashboard';
      break;
    }

    case matchPath + routes[1].path: {
      icon = <VideoCameraOutlined />;
      name = 'Appointment';
      break;
    }

    case matchPath + routes[2].path: {
      icon = <UploadOutlined />;
      name = 'Doctor';
      break;
    }

    case matchPath + routes[3].path: {
      icon = <UploadOutlined />;
      name = 'Psychology Test';
      break;
    }

    case matchPath + routes[4].path: {
      icon = <UserOutlined />;
      name = 'Questions & Answers';
      break;
    }

    case matchPath + routes[5].path: {
      icon = <UploadOutlined />;
      name = 'Feedback';
      break;
    }

    case matchPath + routes[6].path: {
      icon = <UserOutlined />;
      name = 'Payment';
      break;
    }
    case matchPath + routes[7].path: {
      icon = <UploadOutlined />;
      name = 'Forum';
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

const SiderMenu: React.FC<Props> = ({ collapsed = false, matchPath }: Props) => {
  const history = useHistory();
  const location = useLocation();

  const redirectToApp = () => {
    history.push('/app/dashboard');
  };

  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="custom-sider"
        width="250"
      >
        <div className="sider-logo" onClick={redirectToApp}>
          <p>PsyCare.</p>
        </div>
        <Menu className="custom-menu">
          {routes.map((route, index) => MenuItem(`${matchPath}${route.path}`, index, matchPath, location.pathname))}
        </Menu>
      </Sider>
    </>
  );
};

SiderMenu.defaultProps = {
  collapsed: false,
};

export default SiderMenu;
