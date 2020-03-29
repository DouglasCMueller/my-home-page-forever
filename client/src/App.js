import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import EventList from "./pages/EventList";
import TodoList from "./pages/TodoList";
import UserLogin from "./pages/UserLogin";
import Favorites from "./pages/Favorites";
import NewUser from "./pages/NewUser";
import UserList from "./pages/UserList";
import WebsiteList from "./pages/WebsiteList";
import "./App.css"

function App() {
  return (
    <Router>
      <div>

        <Switch>
          <Route exact path="/" component={UserLogin} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/events" component={EventList} />
          <Route exact path="/todos" component={TodoList} />
          <Route exact path="/userLogin" component={UserLogin} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/newUser" component={NewUser} />
          <Route exact path="/userList" component={UserList} />
          <Route exact path="/websites" component={WebsiteList} />
        </Switch>
      </div>

    </Router>
  );
}

export default App;
