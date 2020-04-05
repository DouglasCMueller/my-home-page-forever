import React, { Component } from "react";
import API from "../../utils/API";
import { Grid, } from 'semantic-ui-react'
import './style.css'

let userId = window.localStorage.getItem("id");

class TodosList extends Component {

  state = {
    title: "",
    note: "",
    todos: [],
  };

  componentDidMount() {
    this.loadUserTodos();
  }

  loadUserTodos = () => {
    API.getUserById(userId)
      .then(res => {

        this.setState({
          todos: res.data.todo,

        })
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {

    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const savedTodo = {
      title: this.state.title,
      note: this.state.note
    }

    console.log(savedTodo)
    API.addUserTodo(userId, savedTodo)
      .then(res => {

        window.location = '/todos/'
      })
    this.setState({ title: "", note: "" });
  };

  deleteTodo = (title, note) => {

    let deletedTodo = {
      title: title,
      note: note
    }

    API.deleteUserTodo(userId, deletedTodo)
      .then(res => {

        window.location = '/todos/'
      })
    this.setState({ title: "", note: "" });
  }

  render() {
    return (
      <>
        <Grid>
          <Grid.Column width={10}>
            <div className="todoPageTodosContainer">
              <div className="todoPageTodosTitle"><i className="fab fa-elementor"></i> Todos List</div>

              <div className="todoPageIndividualTodosContainer">
                {this.state.todos.map(todo => (

                  <div className="todosListShownContainer" key={todo.title}>
                    <p className="todoListEachContainer"
                      name="title"
                      value={this.state.title}
                    ><strong>Title:     </strong>{todo.title}</p>
                    <p className="todoListEachContainer"
                      name="note"
                      value={this.state.note}
                    ><strong>Note:     </strong>{todo.note}</p>

                    <button className="todoListContainerDeleteButton"
                      onClick={() => this.deleteTodo(todo.title, todo.note)}

                    >Delete</button>
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
          <footer className="footer">
            Copyright <i className="far fa-copyright"></i>
          </footer>
        </Grid>
      </>
    )
  }
}

export default TodosList;