import React from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Typography, Icon,Avatar } from '@material-ui/core';
import HobbyList from './HobyList';
import { createProfile } from '../actions/profile';
import { defaultAvatar } from '../img';
import Geocode from "react-geocode";

class CreateProfile extends React.Component<{createProfile: Function}>{
    state = { bio: null, location: null, selectedFemale: "", selectedMale: "", lookingFem: "", lookingMal: "" }
    componentDidMount() {
       navigator.geolocation.getCurrentPosition((success) => {
            this.setState({
                location: {
                    lon: success.coords.longitude,
                    lat: success.coords.latitude
                }
            });
       });
       Geocode.fromLatLng("48.8583701", "2.2922926").then(
        response => {
          const address = response.results[0].formatted_address;
          console.log(address);
        },
        error => {
          console.error(error);
        }
      );
    }
    selectGender = (gender: string) => {
        if (gender === "selectedFemale") {
            if (this.state.selectedMale === "selected")
                this.setState({ selectedMale: "" });
            if (this.state.selectedFemale === "selected")
                this.setState({ selectedFemale: "" });
            else
                this.setState({selectedFemale: "selected"})
        }
        if (gender === "selectedMale") {
            if (this.state.selectedFemale === "selected")
                this.setState({ selectedFemale: "" });
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
        if (this.state.selectedMale) {
            data.gender = "male"
        }
        if (data.gender === "")
            return;
        this.props.createProfile(data);
    }
    render() {
        return (
            <div>
                <Typography align="center" variant="h3" gutterBottom>
                    Tell us more about you
                    </Typography>
                <Grid container justify="center">
                    <Grid item xs={2} alignItems="center" >
                        <Avatar alt="Remy Sharp" src={defaultAvatar} />
                        <br/>
                        <Button style={{ marginTop: "7px" }} variant="contained" color="primary" >Load avatar</Button>
                        </Grid>
                    <Grid  item xs={2}> 
                        <Typography align="center" variant="h6" gutterBottom>
                            I am
                    </Typography>
                        <Grid item>
                        <Button onClick={(e)=> this.selectGender("selectedFemale")} className={`${this.state.selectedFemale}`} size="large"><Icon className="fas fa-female" color="secondary" fontSize="large"/></Button>
                            <Button onClick={(e) => this.selectGender("selectedMale")} className={`${this.state.selectedMale}`} size="large"><Icon className="fas fa-male" color="secondary" fontSize="large" /></Button>
                            </Grid>
                    <Typography align="center" variant="h6" gutterBottom>
                    Looking for
                    </Typography>
                        <Button onClick={(e)=> this.selectGender("lookingFem")} className={`${this.state.lookingFem}`} size="large"><Icon className="fas fa-female" color="secondary" fontSize="large"/></Button>
                        <Button onClick={(e)=> this.selectGender("lookingMal")}className={`${this.state.lookingMal}`} size="large"><Icon className="fas fa-male" color="secondary" fontSize="large"/></Button>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <HobbyList takeHobbie={this.takeHobbies} />
                    </Grid>
                </div>
        );
    }
}

const mapStateToProps = (state: object) => {
    return state
}

export default connect(mapStateToProps, {createProfile})(CreateProfile);