import React, { MouseEvent } from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Typography, Icon } from '@material-ui/core';
import HobbyList from './HobyList';
class CreateProfile extends React.Component{
    state = {hobby: [], bio: null, location: null, selectedFemale: "", selectedMale: "" , selectedFem: "", selectedMal: ""}
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
        if (gender === "selectedFem") {
            if (this.state.selectedFem === "selected")
                this.setState({ selectedFem: "" });
            else
                this.setState({selectedFem: "selected"})
        }
        if (gender === "selectedMal") {
            if (this.state.selectedMal === 'selected')
                this.setState({ selectedMal: "" });
            else
                this.setState({selectedMal: "selected"})
        }
    }
    render() {
        return (
            <div>
                <Typography align="center" variant="h3" gutterBottom>
                    Tell us more about you
                    </Typography>
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
                        <Button onClick={(e)=> this.selectGender("selectedFem")} className={`${this.state.selectedFem}`} size="large"><Icon className="fas fa-female" color="secondary" fontSize="large"/></Button>
                        <Button onClick={(e)=> this.selectGender("selectedMal")}className={`${this.state.selectedMal}`} size="large"><Icon className="fas fa-male" color="secondary" fontSize="large"/></Button>
                    </Grid>
                </Grid>
                <HobbyList/>
                </div>
        );
    }
}

const mapStateToProps = (state: object) => {
    return state
}

export default connect(mapStateToProps)(CreateProfile);