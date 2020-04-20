import React from 'react';
import './App.css';
import Home from './containers/Home/Home'
import GetStarted from './containers/GetStarted/GetStarted';
import Login from './containers/Login/Login'
import Box from './containers/Box/Box'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/get-started">
          <GetStarted />
        </Route>
        <Route path="/join">
          <GetStarted />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/box">
          <Box />
        </Route>
      </Router>
    </div>
  );
}

export default App;
