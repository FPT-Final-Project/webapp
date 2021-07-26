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
import SelectQuiz from './components/Quiz/SelectQuiz';
import ListDoctors from './components/AdminDoctors/ListDoctors/index';
import ListPatients from './components/ListPatients/index';
import EditDoctor from './components/AdminDoctors/EditDoctors/index';
import { Register } from './components/Register';
import JoinRoom from './components/VideoChat/JoinRoom';
import VideoChat from './components/VideoChat/VideoCall';
import ProfileUser from './components/Profile/ProfileUser';

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
              <Route path="/selectQuiz" component={SelectQuiz} />
              <Route path="/resultQuiz" component={ResultQuiz} />
              <Route path="/questionAnswer" component={QuestionAnswer} />
              <Route path="/feedback" component={Feedback} />
              <Route path="/app" component={LayoutApp} />
              <Route path="/make-an-appointment" component={MakeAnAppointment} />
              <Route path="/payment" component={Payment} />
              {/* Admin */}
              <Route path="/listDoctors" component={ListDoctors} />
              <Route path="/editdoctor/:id" component={EditDoctor} />
              {/* Profile User */}
              <Route path="/myProfile" component={ProfileUser} />

              <Route path="/listPatients" component={ListPatients} />
              {/* VideoCall */}
              <Route path="/videochat" component={JoinRoom} />
              <Route path="/videochatservice/:userid/:room" exact component={VideoChat} />
            </Switch>
          </BrowserRouter>
        </Content>
      </div>
    </Provider>
  );
}

export default App;
