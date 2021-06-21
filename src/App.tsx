import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import LayoutApp from './Layout/index';
import "antd/dist/antd.css";
import Dashboard from './views/Dashboard';
import PsychologyTest from './views/PsychologyTest';
import Appointement from './views/Appointement';

function App() {
  return (
    <div className="App">
      <Router>
            <Route render={(props)=>(
            //Layout and sidebar can now receive props
                <LayoutApp {...props}>
                    <Switch>
                        <Route path="/" exact component={Dashboard}/>
                        <Route path="/psychology-test" component={PsychologyTest}/>
                        <Route path="/appointement" component={Appointement}/>
                    </Switch>
                </LayoutApp>
            )}/>
        </Router>
    </div>
  );
}

export default App;
