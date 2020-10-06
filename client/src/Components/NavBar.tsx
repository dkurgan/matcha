import React from 'react';
import {logo} from '../img';

interface NavBarLoginProps{
  flagLogin: Function
}

export default class NavBarLogin extends React.Component<NavBarLoginProps>{
  render() {
    const { flagLogin } = this.props;
    return (
      <div className="navbar">
        <div className="logo-wrap">
          <img className="logo" src={logo} alt="Logo-Flame"/>
          <h3>Matcha</h3>
        </div>
        <div className="navbar-btn">
          <button className="btn btn-small" onClick={()=>flagLogin()}>LOG IN</button>
        </div>
        {/* <ul>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logou</li>
        </ul> */}
      </div>
  )}
}