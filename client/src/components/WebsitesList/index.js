import React, { Component } from "react";
import Website from "../Website"
import { Grid, } from 'semantic-ui-react'
import API from "../../utils/API";
import './style.css'


console.log(window.localStorage.getItem("id"))
let userId = window.localStorage.getItem("id");


class WebsitesList extends Component {

    state = {
        currentWebsites: [],
        socialMediaWebsites: [],
        userFavoriteWebsites: [],
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
            .then(res =>

                this.setState({ currentWebsites: res.data})
            )
            .catch(err => console.log(err));
    };

getUserFavorites =() =>{
    API.getUserById(userId)
    .then(res =>{
        console.log(res.data.favoritewebsite);
         this.setState({ userFavoriteWebsites: res.data.favoritewebsite})
    })
}

    clicked = id => {
        
        console.log(id)
      
                let savedWebsite={
                    name: this.name,
                    url: this.url,
                    category: this.category
                }
                console.log(savedWebsite)
                API.updateUser({_id: userId},
                   {$push: {favoritewebsite: savedWebsite}})
                .then(req =>{
                    console.log(req)

                })
        
        }
    
   
    render() {
        return (
            <>
                <div className="websitesContainer">
                    <div className="websitesTitle"><i className="fab fa-chrome"></i> Websites List</div>

<div className="favoriteWebsitesContainer">
<Grid>
                        <Grid.Column width={16}>
                            <div className="websitesfavoritesContainer">
                                <div className="favoritewebsitesContainerTitle">Favorites</div>

                                {this.state.userFavoriteWebsites.map(userFavoriteWebsite => (
                                    <Website
                                        clicked={this.clickedFavorite}
                                        // onClick={() => this.handleSaveFavorite(userFavoriteWebsite.id)}
                                        key={userFavoriteWebsite.name}
                                      
                                        name={userFavoriteWebsite.name}
                                        url={userFavoriteWebsite.url}
                                        category={userFavoriteWebsite.category}
                                        favorite={userFavoriteWebsite.favorite}
                                    />
                                ))}

                            </div>
                        </Grid.Column>
                                                        </Grid>

</div>

<div className="favoriteWebsitesContainer">
<Grid>
                        <Grid.Column width={16}>
                            <div className="websitesfavoritesContainer">
                                <div className="favoritewebsitesContainerTitle">Click a website button to add Favorites</div>


                            </div>
                        </Grid.Column>
                                                        </Grid>

</div>



                    <Grid>
                        <Grid.Column width={4}>
                            <div className="websitesSocialMediaContainer">
                                <div className="websitesSocialMediaContainerTitle">Email</div>
                                {this.state.currentWebsites.map(currentWebsite => (
                                    <Website
                                        clicked={this.clicked}
                                        onClick={() => this.handleSaveFavorite(currentWebsite.id)}
                                        key={currentWebsite._id}
                                        id={currentWebsite._id}
                                        name={currentWebsite.name}
                                        url={currentWebsite.url}
                                        category={currentWebsite.category}
                                        favorite={currentWebsite.favorite}
                                    />
                                ))}

                            </div>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <div className="websitesSocialMediaContainer">
                                <div className="websitesSocialMediaContainerTitle">News</div>

                                {this.state.currentWebsites.map(currentWebsite => (
                                    <Website
                                        clicked={this.clicked}
                                        onClick={() => this.handleSaveFavorite(currentWebsite.id)}
                                        key={currentWebsite._id}
                                        id={currentWebsite._id}
                                        name={currentWebsite.name}
                                        url={currentWebsite.url}
                                        category={currentWebsite.category}
                                        favorite={currentWebsite.favorite}
                                    />
                                ))}

                            </div>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <div className="websitesSocialMediaContainer">
                                <div className="websitesSocialMediaContainerTitle">Finance</div>

                                {this.state.currentWebsites.map(currentWebsite => (
                                    <Website
                                        clicked={this.clicked}
                                        onClick={() => this.handleSaveFavorite(currentWebsite.id)}
                                        key={currentWebsite._id}
                                        id={currentWebsite._id}
                                        name={currentWebsite.name}
                                        url={currentWebsite.url}
                                        category={currentWebsite.category}
                                        favorite={currentWebsite.favorite}
                                    />
                                ))}

                            </div>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <div className="websitesSocialMediaContainer">
                                <div className="websitesSocialMediaContainerTitle">Social Media</div>

                                {this.state.currentWebsites.map(currentWebsite => (
                                    <Website
                                        clicked={this.clicked}
                                        onClick={() => this.handleSaveFavorite(currentWebsite.id)}
                                        key={currentWebsite._id}
                                        id={currentWebsite._id}
                                        name={currentWebsite.name}
                                        url={currentWebsite.url}
                                        category={currentWebsite.category}
                                        favorite={currentWebsite.favorite}
                                    />
                                ))}

                            </div>
                        </Grid.Column>


                    </Grid>
                </div>
                <div className="websitesContainerBottom">
                    <Grid>
                        <Grid.Column width={4}>
                            <div className="websitesSocialMediaContainer">
                                <div className="websitesSocialMediaContainerTitle">Social Media</div>

                                {this.state.currentWebsites.map(currentWebsite => (
                                    <Website
                                        clicked={this.clicked}
                                        onClick={() => this.handleSaveFavorite(currentWebsite.id)}
                                        key={currentWebsite._id}
                                        id={currentWebsite._id}
                                        name={currentWebsite.name}
                                        url={currentWebsite.url}
                                        category={currentWebsite.category}
                                        favorite={currentWebsite.favorite}
                                    />
                                ))}

                            </div>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <div className="websitesSocialMediaContainer">
                                <div className="websitesSocialMediaContainerTitle">Social Media</div>

                                {this.state.currentWebsites.map(currentWebsite => (
                                    <Website
                                        clicked={this.clicked}
                                        onClick={() => this.handleSaveFavorite(currentWebsite.id)}
                                        key={currentWebsite._id}
                                        id={currentWebsite._id}
                                        name={currentWebsite.name}
                                        url={currentWebsite.url}
                                        category={currentWebsite.category}
                                        favorite={currentWebsite.favorite}
                                    />
                                ))}

                            </div>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <div className="websitesSocialMediaContainer">
                                <div className="websitesSocialMediaContainerTitle">Social Media</div>

                                {this.state.currentWebsites.map(currentWebsite => (
                                    <Website
                                        clicked={this.clicked}
                                        onClick={() => this.handleSaveFavorite(currentWebsite.id)}
                                        key={currentWebsite._id}
                                        id={currentWebsite._id}
                                        name={currentWebsite.name}
                                        url={currentWebsite.url}
                                        category={currentWebsite.category}
                                        favorite={currentWebsite.favorite}
                                    />
                                ))}

                            </div>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <div className="websitesSocialMediaContainer">
                                <div className="websitesSocialMediaContainerTitle">Social Media</div>

                                {this.state.currentWebsites.map(currentWebsite => (
                                    <Website
                                        clicked={this.clicked}
                                        onClick={() => this.handleSaveFavorite(currentWebsite.id)}
                                        key={currentWebsite._id}
                                        id={currentWebsite._id}
                                        name={currentWebsite.name}
                                        url={currentWebsite.url}
                                        category={currentWebsite.category}
                                        favorite={currentWebsite.favorite}
                                    />
                                ))}

                            </div>
                        </Grid.Column>
                    </Grid>
                </div>
            </>
        )
    }
}

export default WebsitesList;