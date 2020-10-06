import React from 'react';
import { connect } from 'react-redux';
import HobbyList from './HobyList';
import { createProfile } from '../actions/profile';
import { defaultAvatar } from '../img';
import { TextField} from '@material-ui/core';
import NavBarGeneral from './NavBarGeneral';

class CreateProfile extends React.Component<{ createProfile: Function }>{
    state = {pressedMale: "pressed", pressedFemale: "", dateDay: "", dateMM: "", dateYear: "", name: "", hobbie: []}
    iconPressed = (e: React.MouseEvent) => {
        if (this.state.pressedFemale === "pressed") {
            this.setState({ pressedFemale: "" });
            this.setState({ pressedMale: "pressed" });
        }
        else
            this.setState({ pressedMale: "", pressedFemale: "pressed" });
    }
    createProfile = () => {
        const { pressedMale, pressedFemale, dateDay, dateMM, dateYear, name, hobbie } = this.state;
        if (!dateDay || !dateMM || !dateYear || !name) {
            console.log("alert here");
            return;
        }
        this.props.createProfile({
            gender: pressedFemale || pressedMale,
            dateBirth: dateDay + dateMM + dateYear,
            firstName: name,
            hobbie
        });
    }
    updateHobbie = (arr: string[]) => {
        this.setState({ hobbie: arr });
    }
    render() {
        return (
            <div>
                <NavBarGeneral/>
            <div className="create-profile">
                <h1>Tell us more about you</h1>
                <div className="split">
                <div className="profile-photos">
                    <div className="profile-avatar">
                                <label htmlFor="upload-photo"><img src={defaultAvatar} alt="default-avatar" className={`picture_border`} /></label>
                                <input type="file" id="upload-photo" style={{display: "none"}} accept="image/*"/>
                    </div>
                        <div className="hobbie">
                            <h3>Add your interests</h3>
                            <HobbyList updateHobbie={this.updateHobbie}/>
                        </div>
                </div>
                    <div className="profile-selector">
                        <TextField onChange={(e) => this.setState({name: e.target.value})} className="name" label="First Name" />
                    <div className="select-gender">
                        <h3>Gender</h3>
                            <button id="male" onClick={this.iconPressed} className={`${this.state.pressedMale}`}><i className={`fas fa-male largeIcon`}></i></button>
                        <button id="female" onClick={this.iconPressed} className={`${this.state.pressedFemale}`}><i className={`fas fa-female largeIcon`}></i></button>
                    </div>
                    <div className="date-birth">
                        <input maxLength={2} onChange={(e) => this.setState({dateDay: e.target.value})} placeholder="MM"/>
                        <input maxLength={2} onChange={(e) => this.setState({dateMM: e.target.value})} placeholder="DD"/>
                        <input maxLength={4} onChange={(e) => this.setState({dateYear: e.target.value})}placeholder="YYY"/>
                        </div>
                </div>
                </div>
                <button onClick={this.createProfile} className="btn btn-primary">Create</button>
                </div>
                </div>
        );
    }
}

const mapStateToProps = (state: object) => {
    return state
}

export default connect(mapStateToProps, {createProfile})(CreateProfile);