import React, { Component } from "react";
import './style.css'
import API from "../../utils/API";
var bcrypt = require('bcryptjs');

class LoginForm extends Component {

  state = {
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
    let email = { email: this.state.email };
    let password = this.state.password;

    API.getUserByEmail(email)

      .then(res => {

        if (bcrypt.compareSync(password, res.data[0].password)) {
          console.log("password matches");

          localStorage.setItem("id", res.data[0]._id)
          window.location = '/home/'
        }
        else {
          alert("password doesn't match");
          this.setState({ email: "", password: "" });
        }
      }
      )
      .catch(err => alert("No user with that email. Please click 'New User button'"));
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="formContainer">
        <div className="loginFormTitle">User Login Form</div>
        <form>

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
          <div className="submitButtonContainer">
            <button className="userLoginSubmitButton" onClick={this.handleFormSubmit}>Submit</button>

            <button className="newUserButton"><a
              id="newUserButtons"
              className="newUserLink"
              href="/newUser">New User
          </a></button>

          </div>
        </form>
        <footer className="page-footer font-small blue fixed-bottom">
          <h5 >Copyright <i className="far fa-copyright"></i></h5>
        </footer>
      </div>

    );
  }
}
export default LoginForm
