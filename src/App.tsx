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
// import './App.css';

function App() {
  return (
    <div className="App">
      <Content>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/reset" exact component={Reset} />
            <Route path="/resetPass" exact component={ResetPass} />
            <Route path="/selectQuiz" exact component={SelectQuiz} />
            <Route path="/resultQuiz" exact component={ResultQuiz} />
            <Route path="/questionAnswer" exact component={QuestionAnswer} />

          </Switch>
        </BrowserRouter>
      </Content>
    </div>
  );
}

export default App;
