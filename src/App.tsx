import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Content } from 'antd/lib/layout/layout';
import './App.scss';
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import LayoutApp from './pages/app';
import Home from './pages/landing-page/Home';
import Login from './components/Login';
import Register from './components/Register';
import JoinRoom from './components/VideoChat/JoinRoom';
import ProtectedRoute from './config/private-route.config';
import ResultQuiz from './components/Quiz/Result';
import authAction, { AuthActions } from './stores/actions/auth.action';
import SuggestionPage from './components/Quiz/Suggestion';
import VideoChat from './components/VideoChat/VideoCall';
import { PsyTest } from './components/Psytest';
import { doSuccess } from './stores/actions/utils';
import Feedback from './components/Feedback';
import ChatBot from './components/Modals/ChatBot';

function App() {
  const dispatch = useDispatch();
  const [unMounted, setUnMounted] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !unMounted) {
      const user = JSON.parse(localStorage.getItem('user') as string);
      dispatch(doSuccess(AuthActions.LOGIN_SUCCESS, user));
      dispatch(authAction.loginWithToken(token));
    }

    return () => {
      setUnMounted(true);
    };
  }, []);

  return (
    <>
      <div className="App">
        <Content>
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/register/:userId" exact component={Register} />
              <Route exact path="/quiz/:quizId" component={PsyTest} />
              <Route path="/suggestion" exact component={SuggestionPage} />;
              <ProtectedRoute path="/quiz/:quizId/result" exact component={ResultQuiz} />
              <ProtectedRoute path="/app" component={LayoutApp} />
              <ProtectedRoute exact path="/appointment/:appointmentId/start" component={JoinRoom} />
              <ProtectedRoute exact path="/appointment/:appointmentId/join" component={VideoChat} />
              <ProtectedRoute exact path="/appointment/:appointmentId/finish" component={Feedback} />
            </Switch>
          </Router>
        </Content>
      </div>
      <ChatBot />
    </>
  );
}

export default App;
