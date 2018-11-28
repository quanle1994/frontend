/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { userActions } from "../_actions";

import "./login.css";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    console.log("**********************\nconstructor");

    // reset login status
    this.props.dispatch(userActions.logout());

    this.state = {
      email: "",
      password: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    console.log("**********\nsubmit clicked");
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;
    const { dispatch } = this.props;
    if (email && password) {
      dispatch(userActions.login(email, password));
    }
  }

  render() {
    const { classes } = this.props;
    const { loggingIn } = this.props;
    const { email, password, submitted } = this.state;
    return (
      <div
        align="center"
        style={{
          display: "block",
          position: "absolute",
          width: "50vh",
          height: "auto",
          margin: "10",
          top: "50%",
          left: "50%",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <img
          alt="Qoodie"
          src="../../img/logo_background.png"
          style={{
            marginBottom: "20px",
            width: "60%"
          }}
        />

        <form name="form" onSubmit={this.handleSubmit}>
          <div
            className={`form-group${submitted && !email ? " has-error" : ""}`}
          >
            <label htmlFor="email">Username</label>
            <input
              style={{ width: "35vh" }}
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            {submitted && !email && (
              <div className="help-block">Email is required</div>
            )}
          </div>
          <div
            className={`form-group${
              submitted && !password ? " has-error" : ""
            }`}
          >
            <label htmlFor="password">Password</label>
            <input
              style={{ width: "35vh" }}
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            {submitted && !password && (
              <div className="help-block">Password is required</div>
            )}
          </div>
          <div className="form-group">
            <Button
              className={classes.button}
              variant="text"
              size="small"
              style={{
                fontSize: 25,
                color: "#DAA520",
                width: 150,
                marginBottom: 20
              }}
              onClick={this.handleSubmit}
            >
              Login
            </Button>
            {loggingIn && (
              <img
                alt="Loading Icon"
                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
              />
            )}
          </div>
          <div>
            <div
              to="/register"
              style={{
                fontSize: 15,
                color: "#DAA520"
              }}
            >
              Don't have an account?
            </div>
            <Link
              to="/userType"
              style={{
                fontSize: 15,
                color: "#DAA520"
              }}
              className="btn btn-link"
            >
              Sign up here!
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

const connectedLoginPage = connect(mapStateToProps)(
  withStyles(styles)(LoginPage)
);
export { connectedLoginPage as LoginPage };
