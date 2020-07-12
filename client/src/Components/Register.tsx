import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Grid, TextField } from '@material-ui/core';
import { registerUser} from '../actions/auth';

class Register extends React.Component<{ registerUser: Function }>{
    state = {username: "", password: "", firstName: "", secondName: ""}
    handleSubmit(e : MouseEvent) {
        e.preventDefault();
        this.props.registerUser({
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
                        <TextField onChange={(e)=> this.setState({firstName: e.target.value})} placeholder="First name"></TextField>
                    </Grid>
                    <Grid justify="center" container>
                        <TextField onChange={(e)=> this.setState({secondName: e.target.value})} placeholder="Last name"></TextField>
                        </Grid>
                        <Grid justify="center" container>
                        <TextField onChange={(e)=> this.setState({username: e.target.value})} placeholder="Email"></TextField>
                        </Grid>
                        <Grid justify="center" container>
                        <TextField onChange={(e)=> this.setState({password: e.target.value})} placeholder="Password"></TextField>
                    </Grid>
                    <Grid container justify="center">
                            <Button variant="contained" onClick={(e) => this.handleSubmit(e)} color="primary">Register</Button>
                        </Grid>
                    </form>
                    <Grid container justify="center">
                        <Link to='/'>Back</Link>
                        </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state: Object) => {
    return state;
}

export default connect(mapStateToProps,{registerUser})(Register)