import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import LayoutApp from './Layout/index';
import "antd/dist/antd.css";
import Dashboard from './views/Dashboard';
import PsychologyTest from './views/PsychologyTest';
import Appointement from './views/Appointement';
import Home from './page/Home';

function App() {
  return (
    <div className="App">
        <LayoutApp />
        <Home/>
    </div>
  );
}

export default App;
