import React, { Component } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";



class EventList extends Component {
  state = {
    events: [],
    title: "",
    note: ""
  };

  componentDidMount() {
    this.loadEvents();
  }

  loadEvents = () => {
    API.getEvents()
      .then(res =>
        this.setState({ events: res.data, title: "", note: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (

//       <div>
//   <div class="ui pointing secondary menu">
//     <a class="active item">Home</a>
//     <a class="item">Messages</a>
//     <a class="item">Friends</a>
//     <div class="right menu"><a class="item">Logout</a></div>
//   </div>
//   <div class="ui segment"><img src="/images/wireframe/media-paragraph.png" /></div>
// </div>
      <List>
      {this.state.events.map(event => (
        <ListItem key={event._id}>
          <Link to={"/events/" + event._id}>
            <strong>
              {event.title} by {event.note}
            </strong>
          </Link>
       
        </ListItem>
      ))}
    </List>
 
    )
  }
}

export default EventList;
