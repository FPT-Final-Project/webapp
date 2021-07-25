import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
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
    case '/dashboard': {
      icon = <UserOutlined />;
      name = 'Dashboard';
      break;
    }

    case '/appointment': {
      icon = <VideoCameraOutlined />;
      name = 'Appointment';
      break;
    }

    case '/psychology-test': {
      icon = <UploadOutlined />;
      name = 'Psychology Test';
      break;
    }
    case '/questionAnswer': {
      name = 'Question Answer';
      break;
    }
    case '/psyTest': {
      name = 'Psy Test';
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

const SiderMenu: React.FC<Props> = ({ collapsed = false }: Props) => (
  <>
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width="250"
      className="custom-sider"
    >
      <div className="sider-logo">
        <p>PsyCare.</p>
      </div>
      <Menu className="custom-menu">
        {routes.map((route, index) => MenuItem(route.path, index))}
      </Menu>
    </Sider>
  </>
);

SiderMenu.defaultProps = {
  collapsed: false,
};

export default SiderMenu;
