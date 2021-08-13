import React from 'react';
import { Layout } from 'antd';
import { Switch, useRouteMatch } from 'react-router-dom';
import SiderMenu from '../../components/Sider';
import { routes } from './routes';
import HeaderLayout from '../../components/Header/index';
import './style.scss';
import ProtectedRoute from '../../config/private-route.config';

const { Content } = Layout;

const LayoutApp: React.FC = () => {
  const routeMatch = useRouteMatch();

  return (
    <Layout className="layout-main">
      <SiderMenu matchPath={routeMatch.path} />
      <Layout style={{ marginLeft: 0 }}>
        <HeaderLayout />
        <Content className="layout-content">
          <div className="all-content-wrapper">
            <Switch>
              {routes.map((route, index) => (
                <ProtectedRoute
                  key={index}
                  exact
                  path={`${routeMatch.path}${route.path}`}
                  component={route.component}
                />
              ))}
            </Switch>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutApp;
