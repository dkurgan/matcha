import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Grid, TextField } from '@material-ui/core';
import { loginUser} from '../actions/auth';

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
            <div>
                <Grid container justify="center">
                    <form>
                    <Grid justify="center" container>
                        <TextField onChange={(e)=> this.setState({username: e.target.value})}  placeholder="Email"></TextField>
                    </Grid>
                    <Grid justify="center" container>
                        <TextField onChange={(e)=> this.setState({password: e.target.value})} placeholder="Password"></TextField>
                        </Grid>
                    <Grid container justify="center">
                            <Button variant="contained" onClick={(e) => this.handleSubmit(e)} color="primary">Login</Button>
                        </Grid>
                    </form>
                    <Grid container justify="center">
                    <Link to='/register'>Register</Link>
                        <Link to='/reset'>Forget password</Link>
                        </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state: Object) => {
    return state;
}

export default connect(mapStateToProps,{loginUser})(Login)