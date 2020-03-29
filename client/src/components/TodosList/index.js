import React, { Component } from "react";
import API from "../../utils/API";
import './style.css'

console.log(window.localStorage.getItem("id"))
let id = window.localStorage.getItem("id");
function addEventModal() {
  alert("button clicked")
  
  }

class TodosList extends Component {

  state = {
    fname: "",
    todos: [],
   
  };

  componentDidMount() {
    this.loadUserTodos();
  }

  loadUserTodos = () => {
    API.getUser(id)
      .then(res => {
        console.log(res)
        this.setState({
          todos: res.data.todo,
          fname: res.data.fname
        })
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <div className="todoPageTodosContainer">
          <div className="todoPageTodosTitle"><i class="fab fa-elementor"></i> Todos List
          <button className="addTodoButton" onClick={addEventModal}>Add Todo</button>

</div>
          
    
      <div className="todoPageIndividualTodosContainer">
          {this.state.todos.map(todo => (
            <div className="todosListShownContainer">
             <p className="todoListEachContainer"><strong>Title:     </strong>{todo.title}</p> 
             <p className="todoListEachContainer"><strong>Note:     </strong>{todo.note}</p> 
             <button className="todoListContainerEditButton">Edit</button>
             <button className="todoListContainerDeleteButton">Delete</button>
            </div>
           
          ))}
           </div>
        </div>
      </>
    )
  }
}

export default TodosList;