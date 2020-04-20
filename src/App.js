import React from 'react';
import './App.css';
import Home from './containers/Home/Home'
import Products from './containers/Products/Products';
import GetStarted from './containers/GetStarted/GetStarted';
import Login from './containers/Login/Login'
import Box from './containers/Box/Box'
import HowItWorks from './containers/HowItWorks/HowItWorks'

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
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/get-started">
          <GetStarted />
        </Route>
        <Route path="/how-it-works">
          <HowItWorks />
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
