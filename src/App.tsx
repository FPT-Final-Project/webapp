// import React from 'react';
import { Content } from 'antd/lib/layout/layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import QuestionAnswer from './components/QuestionAnswer/QuestionAnswer';
import ResultQuiz from './components/Quiz/ResultQuiz';
import SelectQuiz from './components/Quiz/SelectQuiz';
import Reset from './components/ResetPassword/NewPass';
import Register from './components/Register/Register';
import Home from './page/Home';
import ResetPass from './components/ResetPassword/Reset';
import Feedback from './components/Feedback/Feedback';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Content>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login"  component={Login} />
            <Route path="/register"  component={Register} />
            <Route path="/reset"  component={Reset} />
            <Route path="/resetPass"  component={ResetPass} />
            <Route path="/selectQuiz"  component={SelectQuiz} />
            <Route path="/resultQuiz"  component={ResultQuiz} />
            <Route path="/questionAnswer"  component={QuestionAnswer} />
            <Route path="/feedback"  component={Feedback}/>
          </Switch>
        </BrowserRouter>
      </Content>
    </div>
  );
}

export default App;
