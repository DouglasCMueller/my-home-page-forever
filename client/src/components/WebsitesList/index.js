import React, { Component } from "react";
import WebsiteButton from "../WebsiteButton"
import { Grid, } from 'semantic-ui-react'
import API from "../../utils/API";
import './style.css'

let userId = window.localStorage.getItem("id");

class WebsitesList extends Component {

    state = {
        currentWebsites: [],
        userFavoriteWebsites: [],
        id: "",
        name: "",
        url: "",
        category: ""
    };

    componentDidMount() {
        this.loadWebsites();
        this.getUserFavorites();
    }

    loadWebsites = () => {
        API.getWebsites()
            .then(res => {

                this.setState({ currentWebsites: res.data })
            })
            .catch(err => console.log(err));
    };

    getUserFavorites = () => {
        API.getUserById(userId)
            .then(res => {

                this.setState({ userFavoriteWebsites: res.data.favoritewebsite })
            })
    }

    clicked = (id, name, url, category) => {
        console.log(id, name, url, category)
        let clickedWebsite = {
            id: id,
            name: name,
            url: url,
            category: category
        }

        API.updateUserWebsite(userId, clickedWebsite)
            .then(req => {

                window.location = '/websites/'
            })
    }
    deleteUserFavoriteWebsite = (id, name, url, category, favorite) => {

        let deletedWebsite = {
            id: id,
            name: name,
            url: url,
            category: category,
            favorite: favorite
        }

        API.deleteUserWebsite(userId, deletedWebsite)
            .then(res => {

                window.location = '/websites/'
            })
        this.setState({ date: "", time: "", title: "", note: "" });
    }

    handleInputChange = event => {

        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const savedWebsite = {
            name: this.state.name,
            url: this.state.url,
            category: this.state.category || "Social Media"
        }

        API.saveWebsite(savedWebsite)
            .then(req => {

            })
        this.setState({ name: "", url: "", category: "" });
        window.location = '/websites/'
    };

    render() {
        return (
            <>
                <Grid>
                    <Grid.Column width={11}>
                        <div className="websitesContainer">
                            <div className="websitesTitle"><i className="fab fa-chrome"></i> Websites List</div>

                            <div className="favoriteWebsitesContainer">

                                <div className="websitesFavoritesContainer">
                                    <div className="favoriteWebsitesContainerTitle">Favorites</div>
                                    <div className="favoriteWebsitesContainerTitleB">(Click a button to remove from your Favorites)</div>
                                    <div className="websitesFavoritesButtonsContainer">
                                        {this.state.userFavoriteWebsites.map(userFavoriteWebsite => (
                                            <WebsiteButton
                                                key={userFavoriteWebsite.id}
                                                clicked={this.deleteUserFavoriteWebsite}
                                                onClick={() => this.handleSaveFavorite()}

                                                id={userFavoriteWebsite.id}
                                                name={userFavoriteWebsite.name}
                                                url={userFavoriteWebsite.url}
                                                category={userFavoriteWebsite.category}
                                                favorite={userFavoriteWebsite.favorite}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="websitesContainer">
                                <div className="favoriteWebsitesContainer">
                                    <div className="websitesFavoritesContainer">
                                        <div className="favoriteWebsitesContainerTitle">All Websites</div>
                                        <div className="favoriteWebsitesContainerTitleB">(Click a button to add to your Favorites)</div>
                                        <div className="allWebsitesIndividualCategoryContainer">

                                            <div className="categoryContainer">
                                                <div className="categoryContainerTitle">Social Media</div>
                                                <div className="individualCategoryContainer">
                                                    <div className="socialMediaCategoryButtonsContainer">
                                                        {this.state.currentWebsites.filter(currentWebsite => currentWebsite.category === "Social Media").map(currentWebsite => (
                                                            <WebsiteButton
                                                                key={currentWebsite._id}
                                                                clicked={this.clicked}
                                                                onClick={() => this.handleSaveFavorite(currentWebsite.id)}

                                                                id={currentWebsite._id}
                                                                name={currentWebsite.name}
                                                                url={currentWebsite.url}
                                                                category={currentWebsite.category}
                                                                favorite={currentWebsite.favorite}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="categoryContainer">
                                                <div className="categoryContainerTitle">News</div>
                                                <div className="individualCategoryContainer">
                                                    <div className="emailCategoryButtonsContainer">
                                                        {this.state.currentWebsites.filter(currentWebsite => currentWebsite.category === "News").map(currentWebsite => (
                                                            <WebsiteButton
                                                                key={currentWebsite._id}
                                                                clicked={this.clicked}
                                                                onClick={() => this.handleSaveFavorite(currentWebsite.id)}

                                                                id={currentWebsite._id}
                                                                name={currentWebsite.name}
                                                                url={currentWebsite.url}
                                                                category={currentWebsite.category}
                                                                favorite={currentWebsite.favorite}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="categoryContainer">
                                                <div className="categoryContainerTitle">Travel</div>
                                                <div className="individualCategoryContainer">
                                                    <div className="emailCategoryButtonsContainer">
                                                        {this.state.currentWebsites.filter(currentWebsite => currentWebsite.category === "Travel").map(currentWebsite => (
                                                            <WebsiteButton
                                                                key={currentWebsite._id}
                                                                clicked={this.clicked}
                                                                onClick={() => this.handleSaveFavorite(currentWebsite.id)}

                                                                id={currentWebsite._id}
                                                                name={currentWebsite.name}
                                                                url={currentWebsite.url}
                                                                category={currentWebsite.category}
                                                                favorite={currentWebsite.favorite}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="categoryContainer">
                                                <div className="categoryContainerTitle">Shopping</div>
                                                <div className="individualCategoryContainer">
                                                    <div className="emailCategoryButtonsContainer">
                                                        {this.state.currentWebsites.filter(currentWebsite => currentWebsite.category === "Shopping").map(currentWebsite => (
                                                            <WebsiteButton
                                                                key={currentWebsite._id}
                                                                clicked={this.clicked}
                                                                onClick={() => this.handleSaveFavorite(currentWebsite.id)}

                                                                id={currentWebsite._id}
                                                                name={currentWebsite.name}
                                                                url={currentWebsite.url}
                                                                category={currentWebsite.category}
                                                                favorite={currentWebsite.favorite}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="categoryContainer">
                                                <div className="categoryContainerTitle">Other</div>
                                                <div className="individualCategoryContainer">
                                                    <div className="emailCategoryButtonsContainer">
                                                        {this.state.currentWebsites.filter(currentWebsite => currentWebsite.category === "Other").map(currentWebsite => (
                                                            <WebsiteButton
                                                                key={currentWebsite._id}
                                                                clicked={this.clicked}
                                                                onClick={() => this.handleSaveFavorite(currentWebsite.id)}

                                                                id={currentWebsite._id}
                                                                name={currentWebsite.name}
                                                                url={currentWebsite.url}
                                                                category={currentWebsite.category}
                                                                favorite={currentWebsite.favorite}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid.Column>

                    <Grid.Column width={5}>
                        <div className="newWebsiteTitle"><i className="fab fa-chrome"></i>    New Website</div>
                        <div className="newWebsiteContainer">
                            <div className="newWebsiteDataTitle">Name:</div>
                            <input className="newWebsiteUrlInput" id="newWebsiteNameInputId"

                                type="text"
                                placeholder=""
                                name="name"
                                value={this.state.name}
                                onChange={this.handleInputChange}

                            ></input>
                            <div className="newWebsiteDataTitle">Url:</div>
                            <input className="newWebsiteUrlInput" id="newWebsiteUrlInputId"

                                type="text"
                                placeholder=""
                                name="url"
                                value={this.state.url}
                                onChange={this.handleInputChange}

                            ></input>
                            <div className="newWebsiteDataTitle">Category:</div>
                            <select className="newWebsiteCategoryInput" id="newWebsiteCategoryInputId"
                                type="text"
                                name="category"
                                value={this.state.category}
                                onChange={this.handleInputChange}
                            >
                                <option name="Social Media">Social Media</option>
                                <option name="News">News</option>
                                <option name="Travel">Travel</option>
                                <option name="Shopping">Shopping</option>
                                <option name="Other">Other</option>

                            </select>

                            <div>
                                <button className="newWebsiteSubmitButton" onClick={this.handleFormSubmit}>Submit</button>
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

export default WebsitesList;