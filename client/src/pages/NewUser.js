import React, { Component } from "react";
import NewUserForm from "../components/NewUserForm/"

class NewUser extends Component {
 

  render() {
    return (
      <>
          
          <div class="ui segment" id="headerContainer"><i class="fas fa-air-freshener" id="iconTitle">         My Morning Refresh</i>
  
 </div>
      <NewUserForm />
      </>
    );
  }
}

export default NewUser;
