import React, { Component } from "react";
import API from "../../utils/API";
import { Grid, } from 'semantic-ui-react'
import './style.css'

console.log(window.localStorage.getItem("id"))
let userId = window.localStorage.getItem("id");

class TodosList extends Component {

  state = {
    title: "",
    note:"",
    todos: [],
  };

  componentDidMount() {
    this.loadUserTodos();
  }

  loadUserTodos = () => {
    API.getUserById(userId)
      .then(res => {
        console.log(res)
        this.setState({
          todos: res.data.todo,
          fname: res.data.fname
        })
      })
      .catch(err => console.log(err));
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
 const savedTodo = {
   title: this.state.title,
   note: this.state.note
}

console.log(savedTodo)
  // API.updateUserTodo(userId, savedTodo)
  //  .then (req=>{
  //    console.log(req)
  //  })
  // this.setState({ title: "", note: ""});

};

  render() {
    return (
      <>
        <Grid>
          <Grid.Column width={10}>
            <div className="todoPageTodosContainer">
              <div className="todoPageTodosTitle"><i className="fab fa-elementor"></i> Todos List

</div>

              <div className="todoPageIndividualTodosContainer">
                {this.state.todos.map(todo => (

                  <div className="todosListShownContainer" key={todo.title}>
                    <p className="todoListEachContainer"><strong>Title:     </strong>{todo.title}</p>
                    <p className="todoListEachContainer"><strong>Note:     </strong>{todo.note}</p>
                    <button className="todoListContainerEditButton">Edit</button>
                    <button className="todoListContainerDeleteButton">Delete</button>
                  </div>
                ))}
              </div>
            </div>
            <div>
            </div>
          </Grid.Column>
          <Grid.Column width={6}>
            <div className="newTodoTitle"><i className="fab fa-elementor"></i>   New Todo</div>
            <div className="newTodoContainer">
              <div className="newTodoDataTitle">Title:</div>
              <input className="newTodoTitleInput" id="newTodoTitleInputId"
               type="text"
               placeholder=""
               name="title"
               value={this.state.title}
          onChange={this.handleInputChange}
               ></input>
              <div className="newTodoDataTitle">Note:</div>
              <textarea className="newTodoNoteInput" id="newTodoNoteTextAreaId"
              type="text"
                placeholder=""
                name="note"
                value={this.state.note}
           onChange={this.handleInputChange}
                           
              ></textarea>
              <div>
                <button className="newTodoSubmitButton" onClick={this.handleFormSubmit}>Submit</button>
              </div>
            </div>
          </Grid.Column>
        </Grid>
      </>
    )
  }
}

export default TodosList;