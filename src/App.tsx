import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Content } from 'antd/lib/layout/layout';
import MakeAnAppointment from './components/Make-an-appointment';
import Payment from './components/Payment';
import './App.scss';
import 'antd/dist/antd.css';
import LayoutApp from './pages/app';
import Home from './pages/landing-page/Home';
import QuestionAnswer from './components/QuestionAnswer';
import Feedback from './components/Feedback';
import Reset from './components/ResetPassword/ResetPass';
import SelectQuiz from './components/Quiz/SelectQuiz';
import ResultQuiz from './components/Quiz/Result';
import { Login } from './components/Login';
import { Register } from './components/Register/Register';
import { store } from './stores/store';

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
              <Route path="/resetPass" component={Reset} />
              <Route path="/selectQuiz" component={SelectQuiz} />
              <Route path="/resultQuiz" component={ResultQuiz} />
              <Route path="/questionAnswer" component={QuestionAnswer} />
              <Route path="/feedback" component={Feedback} />
              <Route path="/app" component={LayoutApp} />
              <Route path="/make-an-appointment" component={MakeAnAppointment} />
              <Route path="/payment" component={Payment} />
            </Switch>
          </BrowserRouter>
        </Content>
      </div>
    </Provider>
  );
}

export default App;
