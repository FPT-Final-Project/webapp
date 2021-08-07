import React, { useState } from 'react';
import { Button, Layout } from 'antd';
import { Switch, useRouteMatch } from 'react-router-dom';
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
    <Layout className="layout-main">
      <SiderMenu collapsed={collapsed} matchPath={routeMatch.path} />
      <Layout>
        <HeaderLayout />
        <Content className="layout-content">
          <Switch>
            {routes.map((route, index) => (
              <ProtectedRoute
                key={index}
                path={`${routeMatch.path}${route.path}`}
                component={route.component}
              />
            ))}
            <ProtectedRoute
              path={`${routeMatch.path}/doctor/:doctorId/detail`}
              component={DoctorDetail}
            />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutApp;
