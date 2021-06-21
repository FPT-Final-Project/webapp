import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.scss";
import { useState } from "react";
import SiderMenu from "../components/Sider";
import HeaderLayout from "../components/Header";
import { routes } from "../routes";
const {Content } = Layout;

const LayoutApp: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Router>
      <Layout className="layout-main">
        <SiderMenu collapsed={collapsed} />
        <Layout>
          <HeaderLayout />
          <Content>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={route.component }
                />
              ))}
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default LayoutApp;
