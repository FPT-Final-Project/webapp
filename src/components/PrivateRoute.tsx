import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { fakeAuth } from '../utils/fakeAuth';

interface PrivateRouteProps extends RouteProps {
    // tslint:disable-next-line:no-any
    component: any;
    isLogin: boolean;
}
const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props;
  return (
    <>
      <Route
        {...rest}
        render={({ location }) => (fakeAuth.isAuthenticated === true
          ? <Component />
          : (
            <Redirect to={{
              pathname: '/login',
              state: { from: location },
            }}
            />
          ))}
      />
    </>
  );
};

export default PrivateRoute;
