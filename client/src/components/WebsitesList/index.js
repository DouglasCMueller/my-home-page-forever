import React, { Component } from "react";
import Website from "../Website"
import { Grid, } from 'semantic-ui-react'
import API from "../../utils/API";
import './style.css'

class WebsitesList extends Component {

    state = {
        currentWebsites: [],
        socialMediaWebsites: [],
        name: "",
        url: "",
        category: ""
    };

    componentDidMount() {
        this.loadWebsites();
    }

    loadWebsites = () => {
        API.getWebsites()
            .then(res =>

                this.setState({ currentWebsites: res.data, name: "", url: "", category: "" })
            )
            .catch(err => console.log(err));
    };
    clicked = id => {
        console.log(id)
        API.getWebsite(id)
            .then(res => {
                console.log(res)
            })
    }
    handleSaveWebsite = id => {
        const book = this.state.books.find(book => book.id === id);
    
        API.saveBook({
          googleId: book.id,
          title: book.volumeInfo.title,
          subtitle: book.volumeInfo.subtitle,
          link: book.volumeInfo.infoLink,
          authors: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          image: book.volumeInfo.imageLinks.thumbnail
        }).then(() => this.getBooks());
      };
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