import React, { Component } from "react";
import API from "../../utils/API";

import './style.css'

class UsersList extends Component {

  state = {
    users: [],
    event: [],
    todo: [],
    fname: "",
    lname: "",
    email: "",
    password: ""
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>

        this.setState({ users: res.data, event: [], todo: [], fname: "", lname: "", email: "", password: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <div class="usersTitle">Users List</div>

        {this.state.users.map(user => (
          <div>
            key={user._id}>

              First Name: {user.fname} | Last Name: {user.lname} | event: {user.event[0]} | userid: {user._id}}

          </div>

        ))}


      </>
    )
  }
}

export default UsersList;