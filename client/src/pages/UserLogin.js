import React, { Component } from "react";
import LoginForm from "../components/LoginForm/"

class UserLogin extends Component {
 

  render() {
    return (
      <>
         <div class="ui segment" id="headerContainer"><i class="fas fa-air-freshener" id="iconTitle">         My Morning Refresh</i>
   </div>
     <LoginForm />
      </>
    );
  }
}

export default UserLogin;
