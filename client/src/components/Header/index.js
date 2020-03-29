import React from 'react'
import './style.css'

const Header = () => (

    
       <div className="ui segment" id="headerContainer">
         <i className="fas fa-air-freshener" id="iconTitle">    My Morning Refresh</i>
   <div className="ui pointing secondary menu" id="linksHeader">
     <a className="item" id="homeLink" href="/home">Home</a>
     <a className="item" id="websitesLink" href="/websites" >Websites</a>
     <a className="item" id="eventsLink" href="/events" >Events</a>
     <a className="item" id="todosLink" href="/todos" >Todos</a>
     <div className="right menu"><a className="item" id="logoutLink" onClick={()=>localStorage.removeItem("id")} href="/userLogin" >Logout</a></div>
   </div>
 </div>
 
)

export default Header