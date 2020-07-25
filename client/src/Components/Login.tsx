import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Grid, TextField } from '@material-ui/core';
import { loginUser } from '../actions/auth';
import { loveBackground } from '../img/'
import RegisterForm from './RegisterForm';

class Login extends React.Component<{loginUser: Function}>{
    state = {username: "", password: ""}
    handleSubmit(e : MouseEvent) {
        e.preventDefault();
        this.props.loginUser({
            username: this.state.username,
            password: this.state.password
        });
    }
    render() {
        return (
            <div className="login-wraper" style={{background: `url(${loveBackground}) no-repeat center center/cover`}}>
                {/* <RegisterForm /> */}
                <button className="btn btn-general">LOG IN</button>
                </div>
        )
    }
}

const mapStateToProps = (state: Object) => {
    return state;
}

export default connect(mapStateToProps,{loginUser})(Login)