/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import './style.scss';
import { routes } from '../../pages/app/routes';

const { Sider } = Layout;
const { Item } = Menu;

interface Props {
  collapsed?: boolean;
}

const MenuItem = (path: string, index: number) => {
  let icon;
  let name;

  switch (path) {
    case routes[0].path: {
      icon = <UserOutlined />;
      name = 'Dashboard';
      break;
    }

    case routes[1].path: {
      icon = <VideoCameraOutlined />;
      name = 'Appointment';
      break;
    }

    case routes[2].path: {
      icon = <UploadOutlined />;
      name = 'Doctor';
      break;
    }

    case routes[3].path: {
      icon = <UploadOutlined />;
      name = 'Psychology Test';
      break;
    }

    case routes[4].path: {
      icon = <UserOutlined />;
      name = 'Questions & Answers';
      break;
    }

    case routes[5].path: {
      icon = <UploadOutlined />;
      name = 'Feedback';
      break;
    }

    case routes[6].path: {
      icon = <UserOutlined />;
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
      className="custom-menu-item"
      icon={icon}
    >
      <Link to={path}>{name}</Link>
    </Item>
  );
};

const SiderMenu: React.FC<Props> = ({ collapsed = false }: Props) => {
  const history = useHistory();

  const redirectToApp = () => {
    history.push('/app');
  };

  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width="250"
        className="custom-sider"
      >
        <div className="sider-logo" onClick={redirectToApp}>
          <p>PsyCare.</p>
        </div>
        <Menu className="custom-menu">
          {routes.map((route, index) => MenuItem(route.path, index))}
        </Menu>
      </Sider>
    </>
  );
};

SiderMenu.defaultProps = {
  collapsed: false,
};

export default SiderMenu;
