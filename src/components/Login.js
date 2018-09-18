import React from 'react';
import { connect } from 'react-redux';
import {userActions} from "../actions/userAction";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.submitLogin = this.submitLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    localStorage.removeItem("user");
  }

  handleChange(e) {
    const { name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  submitLogin(e) {
    const { email, password } = this.state;
    const { dispatch } = this.props;
    console.log(this.props);
    dispatch(userActions.login(email, password));
  }

  render() {
    return(<div>
      <h1>Login</h1>
      <input type="email" name="email" placeholder="Email Address" onChange={this.handleChange}/><br/>
      <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/><br/>

      {/*TODO:
            button made into common component
            get form module
            convert to smart component (class)
            hook up to backend API*/}
      <button className="button" onClick={this.submitLogin}>Submit</button>
    </div>);
  }
}

const mapStateToProps = state => {

}

export default connect(mapStateToProps)(Login);