import React, { Component } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import { history } from "./common/history";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Route exact path="/" render={() => (localStorage.getItem("user") ? <Home/> :
              <Redirect to={{pathname: "/login"}}/>
          )}/>
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

const mapStateToProp = state => {

};

export default connect(mapStateToProp)(App);