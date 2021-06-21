import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./style.scss";

const { Sider } = Layout;
const { Item } = Menu;

interface Props {
  collapsed?: boolean;
}
const SiderMenu: React.FC<Props> = ({ collapsed }) => {
  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width="250"
        className="CustomSider"
      >
        <div className="Logo">
          <p>PsyCare.</p>
        </div>
        <Menu  className="CustomMenu">
          <Item key="1" className="CustomMenuItem" icon={<UserOutlined/>}>
            <Link to="/">Dashboard </Link>
          </Item>
          <Item
            key="2"
            className="CustomMenuItem"
            icon={<VideoCameraOutlined />}
          >
            <Link to="/appointement">Appointement </Link>
          </Item>
          <Item key="3" className="CustomMenuItem" icon={<UploadOutlined />}>
            <Link to="/psychology-test">Psychology Test </Link>
          </Item>
        </Menu>
      </Sider>
    </>
  );
};

export default SiderMenu;
