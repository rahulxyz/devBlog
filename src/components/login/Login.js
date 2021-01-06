import React, { Component } from "react";
import {connect} from 'react-redux';
import actions from '../../store/actions';

import "./Login.css";

const LOGIN = "Login";
const REGISTER = "Register";

class Login extends Component {
  state = {
    visibleTab: LOGIN,
  };

  componentDidMount(){
      this.props.login();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;

    const credentials = {
        username,
        password
    }
    this.props.login(credentials);
  };

  selectTab = (tab) => {
    this.setState({ visibleTab: tab });
  };

  render() {
    const { visibleTab } = this.state;
    const loginTab = visibleTab === LOGIN ? "tablink tab-select" : "tablink";
    const registerTab =
      visibleTab === REGISTER ? "tablink tab-select" : "tablink";

    return (
      <section className="login-wrapper">
        <div className="container">
          <div className="login-content">
            <div className="tab">
              <button
                className={loginTab}
                onClick={() => this.selectTab(LOGIN)}
              >
                Login
              </button>
              <button
                className={registerTab}
                onClick={() => this.selectTab(REGISTER)}
              >
                Register
              </button>
            </div>

            {visibleTab === LOGIN ? (
              <article id="Login" className="tab-content">
                <form onSubmit={this.handleSubmit} >
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    autoComplete="new-password"
                    name="password"
                  />
                  <button className="submit" type="submit">
                    Login
                  </button>
                  <p className="terms">
                    By clicking the button, you are agreeing to our{" "}
                    <span className="highlight">Terms and Services</span>
                  </p>
                </form>
              </article>
            ) : (
              <article id="Register" className="tab-content">
                <form onSubmit={this.handleSubmit} autoComplete="chrome-off">
                  <input type="text" placeholder="Username" name="username" />
                  <input
                    type="password"
                    placeholder="Password"
                    autoComplete="new-password"
                    name="password"
                  />
                  <button className="submit" type="submit">
                    Register
                  </button>
                  <p className="terms">
                    By clicking the button, you are agreeing to our{" "}
                    <span className="highlight">Terms and Services</span>
                  </p>
                </form>
              </article>
            )}
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = {
    login: actions.login
}

export default connect(null, mapDispatchToProps)(Login);
