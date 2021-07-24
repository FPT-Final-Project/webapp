import * as reactRouterDom from 'react-router-dom';
import { Content } from 'antd/lib/layout/layout';
import MakeAnAppoinment from './components/Make-an-appointment';
import Payment from './components/Payment';
import './App.scss';
import 'antd/dist/antd.css';
import LayoutApp from './pages/app';
import Home from './pages/landing-page/Home';
import Login from './components/Login';
import QuestionAnswer from './components/QuestionAnswer';
import Feedback from './components/Feedback';
import Register from './components/Register/Register';
import Reset from './components/ResetPassword/ResetPass';
import SelectQuiz from './components/Quiz/SelectQuiz';
import ResultQuiz from './components/Quiz/Result';

function App() {
  return (
    <div className="App">
      <Content>
        <reactRouterDom.BrowserRouter>
          <reactRouterDom.Switch>
            <reactRouterDom.Route path="/" exact component={Home} />
            <reactRouterDom.Route path="/login" component={Login} />
            <reactRouterDom.Route path="/register" component={Register} />
            <reactRouterDom.Route path="/resetPass" component={Reset} />
            <reactRouterDom.Route path="/selectQuiz" component={SelectQuiz} />
            <reactRouterDom.Route path="/resultQuiz" component={ResultQuiz} />
            <reactRouterDom.Route path="/questionAnswer" component={QuestionAnswer} />
            <reactRouterDom.Route path="/feedback" component={Feedback} />
            <reactRouterDom.Route path="/app" component={LayoutApp} />
            <reactRouterDom.Route path="/make-an-appointment" component={MakeAnAppoinment} />
            <reactRouterDom.Route path="/payment" component={Payment} />
          </reactRouterDom.Switch>
        </reactRouterDom.BrowserRouter>
      </Content>
    </div>
  );
}

export default App;
