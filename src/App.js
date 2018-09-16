import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
)

const Login = () => (
  <div>
    <h1>Login</h1>
  </div>
)

const Nav = () => {
  return (
    <div>
      <Link to="/">
        <button className="btn">Home</button>
      </Link>
      <Link to="/login">
        <button className="btn">Login</button>
      </Link>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome</h1>
              <Nav />
          </header>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App