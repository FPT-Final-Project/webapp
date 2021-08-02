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
<<<<<<< HEAD
              path={`${routeMatch.path}/doctor/:doctorId`}
=======
              path={`${routeMatch.path}/doctor/:doctorId/detail`}
>>>>>>> c86bc605ef1d18b28ecb5d585014e92b76f501a5
              component={DoctorDetail}
            />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutApp;
