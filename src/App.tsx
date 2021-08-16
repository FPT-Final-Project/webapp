import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Content } from 'antd/lib/layout/layout';
import './App.scss';
import 'antd/dist/antd.css';
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
import { AuthActions } from './stores/actions/auth.action';
import { doSuccess } from './stores/actions/utils';
import SuggestionPage from './components/Quiz/Suggestion';
import VideoChat from './components/VideoChat/VideoCall';
import { PsyTest } from './components/PsyTest';

function App() {
  const user = localStorage.getItem('user');
  if (user) {
    store.dispatch(doSuccess(AuthActions.LOGIN_SUCCESS, JSON.parse(user)));
  }
  return (
    <Provider store={store}>
      <div className="App">
        <Content>
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/register/:userId" exact component={Register} />
              <Route path="/reset" component={Reset} />
              <Route path="/resetPass" component={ResetPass} />
              <Route exact path="/quiz/:quizId" component={PsyTest} />
              {/* Profile User/Doctor */}
              <Route path="/suggestion" exact component={SuggestionPage} />;
              <ProtectedRoute path="/quiz/:quizId/result" exact component={ResultQuiz} />
              <ProtectedRoute path="/app" component={LayoutApp} />
              {/*
                TODO: Refactor Route
                <ProtectedRoute path="/make-an-appointment" exact component={MakeAnAppointment} />
                <ProtectedRoute path="/app/doctor/detail/:id" exact component={DoctorDetail} />
                <ProtectedRoute path="/listDoctors" exact component={ListDoctors} />
                <ProtectedRoute path="/app/patient" exact component={ListPatients} />
               */}
              {/* VideoCall */}
              <ProtectedRoute exact path="/appointment/:appointmentId/start" component={JoinRoom} />
              <ProtectedRoute exact path="/appointment/:appointmentId/join" component={VideoChat} />
            </Switch>
          </Router>
        </Content>
      </div>
    </Provider>
  );
}

export default App;
