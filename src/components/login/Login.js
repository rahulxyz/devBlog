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

  componentDidUpdate(prevProps){
    if(prevProps.isAuthorised  !== this.props.isAuthorised && this.props.isAuthorised){
      this.props.history.push("/")
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {visibleTab} = this.state;
    
    if(visibleTab === REGISTER){
      const registerData = {
        name: event.target[0].value,
        email: event.target[1].value,
        password: event.target[2].value,
      }
      this.handleRegister(registerData);
    }else if(visibleTab === LOGIN){
      const loginData = {
        email: event.target[0].value,
        password: event.target[1].value,
      }
      this.handleLogin(loginData);
    }

    
  };

  handleLogin = (loginData)=>{
    this.props.login(loginData);
  }

  handleRegister = async (registerData)=>{
    try{
      await this.props.register(registerData);
      this.setState({visibleTab: LOGIN});
    } catch(error){
      //handle error
    }
  }

  selectTab = (tab) => {
    this.setState({ visibleTab: tab });
  };

  render() {
    const { visibleTab } = this.state;
    const loginTab = visibleTab === LOGIN ? "tablink tab-select" : "tablink";
    const registerTab =
      visibleTab === REGISTER ? "tablink tab-select" : "tablink";
    const {loginError} = this.props;

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
                    placeholder="Email"
                    name="email"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    autoComplete="new-password"
                    name="password"
                  />
                  <p className="error-msg">{loginError}</p>
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
                  <input type="text" placeholder="Email" name="email" />
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

const mapStateToProps = (state)=>{
  return {
    isAuthorised: state.auth.isAuthorised,
    loginError: state.auth.error
  }
}

const mapDispatchToProps = {
    login: actions.login,
    register: actions.register
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
