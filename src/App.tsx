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
              <Route path="/reset" component={Reset} />
              <Route path="/resetPass" component={ResetPass} />
              <ProtectedRoute path="/selectQuiz" component={SelectQuiz} />
              <ProtectedRoute path="/resultQuiz" component={ResultQuiz} />
              <ProtectedRoute path="/questionAnswer" component={QuestionAnswer} />
              <ProtectedRoute path="/feedback" component={Feedback} />
              <ProtectedRoute path="/app" component={LayoutApp} />
              <ProtectedRoute path="/make-an-appointment" component={MakeAnAppointment} />
              <ProtectedRoute path="/payment" component={Payment} />
              {/* Admin */}
              <ProtectedRoute path="/listDoctors" component={ListDoctors} />
              <ProtectedRoute path="/editdoctor/:id" component={EditDoctor} />
              {/* Profile User */}
              <ProtectedRoute path="/myProfile" component={ProfileUser} />

              <ProtectedRoute path="/listPatients" component={ListPatients} />
              {/* VideoCall */}
              <ProtectedRoute path="/videochat" component={JoinRoom} />
              <ProtectedRoute path="/videochatservice/:userid/:room" exact component={VideoChat} />
            </Switch>
          </BrowserRouter>
        </Content>
      </div>
    </Provider>
  );
}

export default App;
