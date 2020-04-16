import React from 'react';
import './App.css';
import Home from './containers/Home/Home'
import GetStarted from './containers/GetStarted/GetStarted';

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
      </Router>
    </div>
  );
}

export default App;
