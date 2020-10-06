import React from 'react';
import { connect } from 'react-redux';
import {logoColor} from '../img';

class NavBar extends React.Component {
    render() {
        let test = window.matchMedia("(max-widh)")
        return (
            <div className="navbar">
                <div className="logo-dark">
                    <img className="logo" src={logoColor} alt="Logo-Flame" />
                    <h3>Matcha</h3>
                </div>
                <div className="navbar-btn">
                    <button className="btn btn-small" >LOG IN</button>
                </div>
            </div>
        )
    }
}

export default connect()(NavBar);