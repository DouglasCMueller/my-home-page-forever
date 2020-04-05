import React, { Component } from "react";
import './style.css'
import API from "../../utils/API";
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

class NewUserForm extends Component {

  state = {
    fname: "",
    lname: "",
    locationcity: "",
    locationstate: "",
    email: "",
    password: ""

  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    let myPlaintextPassword = this.state.password;
    var hash = bcrypt.hashSync(myPlaintextPassword, salt);

    const user = {
      fname: this.state.fname,
      lname: this.state.lname,
      locationcity: this.state.locationcity,
      locationstate: this.state.locationstate,
      email: this.state.email,
      password: hash,
      todo: [],
      event: []
    }

    API.saveUser({
      fname: user.fname,
      lname: user.lname,
      email: user.email,
      password: user.password,
      locationcity: user.locationcity,
      locationstate: user.locationstate,
      todo: [],
      event: []
    })
    this.setState({ fname: "", lname: "", locationcity: "", locationstate: "", email: "", password: "" });
    window.location = '/userLogin/'
  };

  render() {
    return (
      <div className="formContainer">
        <div className="loginFormTitle">New User Login Form</div>
        <form>
          <p>First Name:</p>
          <input
            type="text"
            placeholder=""
            name="fname"
            value={this.state.fname}
            onChange={this.handleInputChange}
          />
          <p>Last Name:</p>
          <input
            type="text"
            placeholder=""
            name="lname"
            value={this.state.lname}
            onChange={this.handleInputChange}
          />

          <p>City:</p>
          <input
            type="text"
            placeholder=""
            name="locationcity"
            value={this.state.locationcity}
            onChange={this.handleInputChange}
          />

          <p>State:</p>
          <input
            type="text"
            placeholder=""
            name="locationstate"
            value={this.state.locationstate}
            onChange={this.handleInputChange}
          />

          <p>Email:</p>
          <input
            type="text"
            placeholder=""
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <p>Password:</p>
          <input
            type="password"
            placeholder=""
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <div className="buttonContainer">
            <button className="newUserSubmitButton" onClick={this.handleFormSubmit}>Submit</button>
          </div>
        </form>
        <footer className="page-footer font-small blue fixed-bottom">
          <h5 >Copyright <i className="far fa-copyright"></i></h5>
        </footer>
      </div>

    );
  }
}
export default NewUserForm