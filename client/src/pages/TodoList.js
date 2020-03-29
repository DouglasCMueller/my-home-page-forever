import React, { Component } from "react";
import Header from "../components/Header/index"
import TodosList from "../components/TodosList";

class TodoList extends Component {
  
  render() {
    return (
    <>
   <Header />
   <TodosList />
   </>
 
    )
  }
}

export default TodoList;