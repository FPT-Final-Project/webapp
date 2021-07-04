// import React from 'react';
import { Content } from 'antd/lib/layout/layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import QuestionAnswer from './components/QuestionAnswer';
import Reset from './components/NewPass';
import Register from './components/Register/Register';
import ResetPass from './components/ResetPassword';
import Feedback from './components/Feedback';
// import './App.scss';
import LayoutApp from './pages/app/index';
import Home from './pages/landing-page/Home';
import 'antd/dist/antd.css';
import { ResultQuiz } from './components/Quiz/Result';
import { SelectQuiz } from './components/Quiz/SelectQuiz';

function App() {
  return (
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
          </Switch>
        </BrowserRouter>
      </Content>
    </div>
  );
}

export default App;
