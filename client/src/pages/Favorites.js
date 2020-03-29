import React, { Component } from "react";
import Header from "../components/Header"
import FavoritesPageList from "../components/FavoritesPageList"
import "../App.css"

class Favorites extends Component {
 

  render() {
    return (
      <>
<Header />
<div className="favoritePageListContainer">
  <div className="socialMediaButtonsContainer">Social Media</div>
<FavoritesPageList />
<div className="favoritesButtonForUserToAddSite">
  <button>Add New Site</button>
</div>
</div>
<div className="favoritePageListContainer">
  <div className="newsButtonsContainer">News</div>
<FavoritesPageList />
<div className="favoritesButtonForUserToAddSite">
  <button className="addNewSiteButton">Add New Site</button>
</div>
</div>
<div className="favoritePageListContainer">
  <div className="financeButtonsContainer">Finance</div>
<FavoritesPageList />
<div className="favoritesButtonForUserToAddSite">
  <button className="addNewSiteButton">Add New Site</button>
</div>
</div>
<div className="favoritePageListContainer">
  <div className="travelButtonsContainer">Travel</div>
<FavoritesPageList />
<div className="favoritesButtonForUserToAddSite">
  <button className="addNewSiteButton">Add New Site</button>
</div>
</div>

      </>
    );
  }
}

export default Favorites;
