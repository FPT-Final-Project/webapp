import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Content } from 'antd/lib/layout/layout';
import './App.scss';
import 'antd/dist/antd.css';
import { useEffect } from 'react';
import LayoutApp from './pages/app';
import Home from './pages/landing-page/Home';
import Reset from './components/NewPass';
import ResetPass from './components/ResetPassword';
import { store } from './stores/store';
import Login from './components/Login';
import Register from './components/Register';
import JoinRoom from './components/VideoChat/JoinRoom';
import ProtectedRoute from './config/private-route.config';
import ResultQuiz from './components/Quiz/Result';
import authAction from './stores/actions/auth.action';
import SuggestionPage from './components/Quiz/Suggestion';
import { PsyTest } from './components/Psytest';
import VideoChat from './components/VideoChat/VideoCall';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(authAction.loginWithToken(token));
    }
  }, []);

  return (
    <div className="App">
      <Content>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/register/:userId" exact component={Register} />
            {/* <Route path="/reset" component={Reset} />
            <Route path="/resetPass" component={ResetPass} /> */}
            <Route exact path="/quiz/:quizId" component={PsyTest} />
            {/* Profile User/Doctor */}
            <Route path="/suggestion" exact component={SuggestionPage} />;
            <ProtectedRoute path="/quiz/:quizId/result" exact component={ResultQuiz} />
            <ProtectedRoute path="/app" component={LayoutApp} />
            <ProtectedRoute exact path="/appointment/:appointmentId/start" component={JoinRoom} />
            <ProtectedRoute exact path="/appointment/:appointmentId/join" component={VideoChat} />
          </Switch>
        </Router>
      </Content>
    </div>
  );
}

export default App;
