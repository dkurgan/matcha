import React from 'react';
import {logoColor} from '../img';
import { loginUser, registerUser } from '../actions/auth';
import { connect } from 'react-redux';

interface RegisterProp{
  showLogin: Function,
  login: boolean,
  loginUser: Function,
  registerUser: Function
}

class RegisterForm extends React.Component<RegisterProp>{
  state = { username: "", password: "", passwordTwo: "" }
  handleSubmit = () =>{
    if (this.props.login) {
      this.props.loginUser({
        username: this.state.username,
        password: this.state.password
      });
    }
    else {
      if (this.state.password !== this.state.passwordTwo) {
        console.log("fail");
        return;
      }
      this.props.registerUser({
        username: this.state.username,
        password: this.state.password
      })
    }
}
  render() {
    const { showLogin, login } = this.props
    // if (login)
      
    return (
        <div className="shadow-wrap">
          <div className="shadow" onClick={()=> showLogin()}></div>
          <div className="form">
            <header>
            <img className="logo" src={logoColor} alt="Logo"/>
              <h2>GET STARTED</h2>
              <p>By clicking button below you are agreeing you are having great time.
              And accepts some our <a href="/terms">Terms.</a> and <a href="/terms">Cookie Polices</a></p>
            </header>
          <form>
            <div className="form-group">
              <input type="text" onChange={(e) => this.setState({username: e.target.value})} placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" onChange={(e) => this.setState({ password: e.target.value })} placeholder="Password" />
            </div>
            {!login ?
              <div className="form-group">
                <input type="password" onChange={(e) => this.setState({ passwordTwo: e.target.value })}placeholder="Repeat Password" />
              </div> : null
            }
          </form>
          <button onClick={this.handleSubmit} className="btn btn-general">{!login ? "Register" : "Login"}</button>
          <div className="footer-form">
            <a href="/reset">Having trouble with login?</a>
          </div>
          </div>
          </div>
        )
    }
}

const mapStateToProps = (state: object) => {
  return state;
}

export default connect(mapStateToProps, { loginUser, registerUser })(RegisterForm);