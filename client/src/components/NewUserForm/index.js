import React, { Component } from "react";
import  './style.css'
import API from "../../utils/API";


class NewUserForm extends Component {
  
  state = {
    fname: "",
    lname: "",
    locationcity: "",
    locationstate: "",
    email: "",
    password: ""
    
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
   const user = {
     fname: this.state.fname,
     lname: this.state.lname,
     locationcity: this.state.locationcity,
     locationstate: this.state.locationstate,
email: this.state.email,
password: this.state.password,
todo: [],
event: []
 }

console.log(user)
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
      <div className= "formContainer">
        <div class="loginFormTitle">New User Login Form</div>
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
        <div class="buttonContainer">
        <button onClick={this.handleFormSubmit}>Submit</button>
        </div>
      </form>
      </div>
    );
  }
}
export default NewUserForm