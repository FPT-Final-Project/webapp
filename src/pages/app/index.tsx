import React, { useState } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, useRouteMatch } from 'react-router-dom';
import SiderMenu from '../../components/Sider';
import { routes } from './routes';
import HeaderLayout from '../../components/Header/index';
import './style.scss';
import ProtectedRoute from '../../config/private-route.config';
import DoctorDetail from '../../components/AdminDoctors/DoctorDetail';

const { Content } = Layout;

const LayoutApp: React.FC = () => {
  const routeMatch = useRouteMatch();
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Router>
      <Layout className="layout-main">
        <SiderMenu collapsed={collapsed} matchPath={routeMatch.path} />
        <Layout>
          <HeaderLayout />
          <Content className="layout-content">
            <Switch>
              {routes.map((route, index) => (
                <ProtectedRoute
                  key={index}
                  exact={route.exact}
                  path={`${routeMatch.path}${route.path}`}
                  component={route.component}
                />
              ))}
              <ProtectedRoute
                path={`${routeMatch.path}/doctor/:doctorId`}
                component={DoctorDetail}
              />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default LayoutApp;
