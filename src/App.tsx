import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Content } from 'antd/lib/layout/layout';
import MakeAnAppointment from './components/MakeAnAppointment';
import './App.scss';
import 'antd/dist/antd.css';
import LayoutApp from './pages/app';
import Home from './pages/landing-page/Home';
import QuestionAnswer from './components/QuestionAnswer';
import ResetPass from './components/ResetPassword';
import { store } from './stores/store';
import { Login } from './components/Login';
import ListPatients from './components/ListPatients/index';
import { Register } from './components/Register';
import JoinRoom from './components/VideoChat/JoinRoom';
import VideoChat from './components/VideoChat/VideoCall';
import ProfileUser from './components/Profile/ProfileUser';
import ProtectedRoute from './config/private-route.config';
import DoctorDetail from './components/AdminDoctors/DoctorDetail';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Content>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/resetPass" component={ResetPass} />
              {/* <ProtectedRoute path="/selectQuiz" component={SelectQuiz} />
              <ProtectedRoute path="/resultQuiz" component={ResultQuiz} /> */}
              <ProtectedRoute path="/questionAnswer" component={QuestionAnswer} />
              {/* <ProtectedRoute path="/feedback" component={Feedback} /> */}
              <ProtectedRoute path="/app" component={LayoutApp} />
              <ProtectedRoute path="/make-an-appointment" exact component={MakeAnAppointment} />
              {/* Admin */}
              {/* <ProtectedRoute path="/listDoctors" exact component={ListDoctors} /> */}
              <ProtectedRoute path="/app/doctor/detail/:id" exact component={DoctorDetail} />
              {/* Profile User */}
              <ProtectedRoute path="/myProfile" component={ProfileUser} />

              <ProtectedRoute path="/app/patient" exact component={ListPatients} />
              {/* VideoCall */}
              <ProtectedRoute path="/videochat" exact component={JoinRoom} />
              <ProtectedRoute path="/videochatservice/:userid/:room" exact component={VideoChat} />
            </Switch>
          </BrowserRouter>
        </Content>
      </div>
    </Provider>
  );
}

export default App;
