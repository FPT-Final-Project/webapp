import React from 'react';
import { Content } from 'antd/lib/layout/layout';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register/Register';
import LayoutApp from './pages/app/index';
import Home from './pages/landing-page/Home';
import 'antd/dist/antd.css';
import PrivateRoute from './components/PrivateRoute';

const App: React.FC = () => (
  <div className="App">
    <Content>
      <BrowserRouter>
        <Switch>
          <PrivateRoute isLogin={false} path="/app" component={LayoutApp} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Content>
  </div>
);

export default App;
