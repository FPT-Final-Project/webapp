import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Content } from 'antd/lib/layout/layout';
import MakeAnAppointment from './components/MakeAnAppointment';
import Payment from './components/Payment';
import './App.scss';
import 'antd/dist/antd.css';
import LayoutApp from './pages/app';
import Home from './pages/landing-page/Home';
import QuestionAnswer from './components/QuestionAnswer';
import Reset from './components/NewPass';
import ResetPass from './components/ResetPassword';
import Feedback from './components/Feedback';
import { store } from './stores/store';
import { Login } from './components/Login';
import ResultQuiz from './components/Quiz/Result';
import ListDoctors from './components/AdminDoctors/ListDoctors/index';
import ListPatients from './components/ListPatients/index';
import EditDoctor from './components/AdminDoctors/EditDoctors/index';
import { Register } from './components/Register';
import JoinRoom from './components/VideoChat/JoinRoom';
import VideoChat from './components/VideoChat/VideoCall';
import ProfileUser from './components/Profile/ProfileUser';
import ProtectedRoute from './config/private-route.config';
import { SelectQuiz } from './components/Quiz/SelectQuiz';
import DoctorDetail from './components/AdminDoctors/DoctorDetail';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Content>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/reset" exact component={Reset} />
              <Route path="/resetPass" exact component={ResetPass} />
              <ProtectedRoute path="/selectQuiz" exact component={SelectQuiz} />
              <ProtectedRoute path="/resultQuiz" exact component={ResultQuiz} />
              {/* <ProtectedRoute path="/questionAnswer" component={QuestionAnswer} /> */}
              {/* <ProtectedRoute path="/feedback" component={Feedback} /> */}
              <ProtectedRoute path="/app" exact component={LayoutApp} />
              <ProtectedRoute path="/make-an-appointment" exact component={MakeAnAppointment} />
              <ProtectedRoute path="/payment" exact component={Payment} />
              {/* Admin */}
              {/* <ProtectedRoute path="/listDoctors" exact component={ListDoctors} /> */}
              <ProtectedRoute path="/app/doctor/detail/:id" exact component={DoctorDetail} />
              {/* Profile User */}
              <ProtectedRoute path="/myProfile" exact component={ProfileUser} />

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
