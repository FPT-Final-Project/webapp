import React from 'react';
import { Layout } from 'antd';
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

  return (
    <Layout className="layout-main">
      <SiderMenu matchPath={routeMatch.path} />
      <Layout style={{ marginLeft: 0 }}>
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
