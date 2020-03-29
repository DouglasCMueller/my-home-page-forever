import React, { Component } from "react";
import './style.css'
import API from "../../utils/API";


class LoginForm extends Component {

  state = {
      email: "",
    password: ""
  };

  // handle any changes to the input fields
  handleInputChange = event => {
   
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
   const email =  {email: this.state.email};
   const password = this.state.password;

    API.getUserByEmail(email)

    .then(res => {
 console.log(res)
 console.log(res.data[0].password)
 console.log(typeof password)
 if (res.data[0].password === password){
   console.log("password matches");
   console.log(res.data[0]._id)

  localStorage.setItem("id",res.data[0]._id)
 window.location= '/home/'
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
      <div className= "formContainer">
        <div class="loginFormTitle">User Login Form</div>
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
        <div class="submitButtonContainer">
        <button onClick={this.handleFormSubmit}>Submit</button>
    
        <div  id="newUserButtons">
          <a  class="newUserLink" href="/newUser">New User</a>
          </div>
        
        </div>
      </form>
      </div>
      
    );
  }
}
export default LoginForm
