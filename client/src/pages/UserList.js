import React, { Component } from "react";
import Header from "../components/Header/index"
import UsersList from "../components/UsersList";

class UserList extends Component {
  
  render() {
    return (
    <>
 <Header />
   <UsersList />
   </>
 
    )
  }
}

export default UserList;
