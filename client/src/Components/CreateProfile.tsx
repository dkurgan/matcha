import React from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Typography, Icon } from '@material-ui/core';
import HobbyList from './HobyList';
import {createProfile} from '../actions/profile';

class CreateProfile extends React.Component<{createProfile: Function}>{
    state = {bio: null, location: null, selectedFemale: "", selectedMale: "" , lookingFem: "", lookingMal: ""}
    selectGender = (gender: string) => {
        if (gender === "selectedFemale") {
            if (this.state.selectedFemale === "selected")
                this.setState({ selectedFemale: "" });
            else
                this.setState({selectedFemale: "selected"})
        }
        if (gender === "selectedMale") {
            if (this.state.selectedMale === 'selected')
                this.setState({ selectedMale: "" });
            else
                this.setState({selectedMale: "selected"})
        }
        if (gender === "lookingFem") {
            if (this.state.lookingFem === "selected")
                this.setState({ lookingFem: "" });
            else
                this.setState({lookingFem: "selected"})
        }
        if (gender === "lookingMal") {
            if (this.state.lookingMal === 'selected')
                this.setState({ lookingMal: "" });
            else
                this.setState({lookingMal: "selected"})
        }
    }
    takeHobbies = (list: []) => {
        let data = {
            hobby: list,
            bio: this.state.bio,
            location: this.state.location,
            gender: "",
            looking: {
                male: this.state.lookingMal,
                female: this.state.lookingFem
            }
        }
        if (this.state.selectedFemale) {
            data.gender = "female";   
        }
        else 
            data.gender = "male"
        this.props.createProfile(data);
    }
    render() {
        return (
            <div>
                <Typography align="center" variant="h3" gutterBottom>
                    Tell us more about you
                    </Typography>
                <Grid container justify="center">
                    <Button variant="contained" color="primary" >Load avatar</Button>
                </Grid>
                <Grid container justify="center">
                    <Grid item > 
                    <Typography align="center" variant="h6" gutterBottom>
                    I am
                    </Typography>
                        <Button onClick={(e)=> this.selectGender("selectedFemale")} className={`${this.state.selectedFemale}`} size="large"><Icon className="fas fa-female" color="secondary" fontSize="large"/></Button>
                        <Button onClick={(e)=> this.selectGender("selectedMale")}className={`${this.state.selectedMale}`} size="large"><Icon className="fas fa-male" color="secondary" fontSize="large"/></Button>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Grid item>
                    <Typography align="center" variant="h6" gutterBottom>
                    Looking for
                    </Typography>
                        <Button onClick={(e)=> this.selectGender("lookingFem")} className={`${this.state.lookingFem}`} size="large"><Icon className="fas fa-female" color="secondary" fontSize="large"/></Button>
                        <Button onClick={(e)=> this.selectGender("lookingMal")}className={`${this.state.lookingMal}`} size="large"><Icon className="fas fa-male" color="secondary" fontSize="large"/></Button>
                    </Grid>
                </Grid>
                <HobbyList takeHobbie={this.takeHobbies} />
                </div>
        );
    }
}

const mapStateToProps = (state: object) => {
    return state
}

export default connect(mapStateToProps, {createProfile})(CreateProfile);