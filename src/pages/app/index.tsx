import React, { useState } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SiderMenu from '../../components/Sider';
import { routes } from './routes';
import HeaderLayout from '../../components/Header/index';
import './style.scss';

const { Content } = Layout;

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
                  exact={route.exact}
                  path={`/app/${route.path}`}
                >
                  {route.component}
                </Route>
              ))}
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default LayoutApp;
