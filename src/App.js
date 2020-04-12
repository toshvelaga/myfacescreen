import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home/Home'

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
      </Router>
    </div>
  );
}

export default App;
