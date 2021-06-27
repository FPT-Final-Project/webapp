import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./style.scss";
import { routes } from "../../routes";

const { Sider } = Layout;
const { Item } = Menu;

interface Props {
  collapsed?: boolean;
}

const MenuItem = (path: string, index: number) => {
  let icon, name;

  switch (path) {
    case '/dashboard': {
      icon = <UserOutlined/>;
      name = "Dashboard";
      break;
    }

    case '/dashboard/appointment': {
      icon = <VideoCameraOutlined />;
      name = "Appointment";
      break;
    }

    case '/dashboard/psychology-test': {
      icon = <UploadOutlined />;
      name = "Psychology Test";
      break;
    }
  };

  return (
    <Item
      key={index}
      className="custom-menu-item"
      icon={icon}
      >
      <Link to={path}>{name}</Link>
    </Item>
  )
}

const SiderMenu: React.FC<Props> = ({ collapsed }) => {
  return (
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
};

export default SiderMenu;