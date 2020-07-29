import React, { MouseEvent } from 'react';
import { connect } from 'react-redux';
import { loveBackground } from '../img/'
import RegisterForm from './RegisterForm';
import NavBar from './NavBar';

class Login extends React.Component{
    state = {clicked: false, isLogin: true}
    showLogin = () => {
        if (this.state.isLogin)
            this.setState({ isLogin: false });
        this.closeLogin();
    }
    closeLogin = () =>{
        this.setState({clicked: !this.state.clicked });
    }
    flagLogin = () => {
        if (!this.state.isLogin)
            this.setState({ isLogin: true });
        this.closeLogin()
    }
    render() {
        const { clicked } = this.state;
        return (
            <div  style={{ background: `url(${loveBackground}) no-repeat center center/cover`, height: "100vh" }}>
                <NavBar flagLogin={this.flagLogin}/>
                <div className="login-wraper">
                    <div className="swipe-right">
                        <h1>Swipe Right</h1>
                    </div>
                    {clicked ? <RegisterForm showLogin={this.closeLogin} login={this.state.isLogin}/> : null}
                <div>
                    <p>By clicking button below you are agreeing you are having great time.</p>
                    <p>And accepts some our <a href="/terms">Terms.</a> and <a href="/terms">Cookie Polices</a></p>
                </div>
                <div className="container">
                    <button className="btn btn-general" onClick={this.showLogin}>SIGN IN</button>
                    </div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state: Object) => {
    return state;
}

export default connect(mapStateToProps)(Login)