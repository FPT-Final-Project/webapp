import { Redirect, Route, RouteProps } from 'react-router-dom';

export type ProtectedRouteProps = {
  component: any,
} & RouteProps;

export default function ProtectedRoute({ component, ...routeProps }: ProtectedRouteProps) {
  const token = localStorage.getItem('token');

  if (token) {
    return <Route {...routeProps} component={component} />;
  }
  return <Redirect to={{ pathname: '/login' }} />;
}
