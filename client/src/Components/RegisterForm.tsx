import React from 'react';

export default class RegisterForm extends React.Component{
    render() {
        return (
            <div id="container">
            <div className="form-wrap">
                        <h1>Matcha</h1>
                    <p>Find someone to love</p>
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" />
                </div>
                <div className="form-group">
                  <label htmlFor="password2">Confirm Password</label>
                  <input type="password" name="pasword2" id="password2" />
                </div>
                <button type="submit" className="btn">Login</button>
                <p className="bottom-text">
                  By clicking the Sign Up button, you agree to our
                  <a href="#">Terms & Conditions</a> and
                  <a href="#">Privacy Policy</a>
                </p>
              </form>
            </div>
            <footer>
              <p>Already have an account? <a href="#">Login Here</a></p>
                </footer>
                </div>
        )
    }
}