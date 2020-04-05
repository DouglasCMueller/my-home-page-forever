import React, { Component } from "react";
import FavoritesButton from "../FavoritesButton";
import socialMediaSites from "../../Arrays/socialMediaSites.json";
import Wrapper from "../Wrapper";

class FavoritesPageList extends Component {

    state = {
        socialMediaSites,

    };

    clicked = id => {

        const socialMediaSites = this.state.socialMediaSites;
        const clickedMatch = socialMediaSites.filter(socialMediaSite => socialMediaSite.id === id)

        for (let i = 0; i < socialMediaSites.length; i++) {
            socialMediaSites[i].clicked = false;
        }
        this.setState({ socialMediaSites });
    };

    render() {
        return (
            <div>

                <Wrapper> {
                    this.state.socialMediaSites.map(socialMediaSite => (<
                        FavoritesButton clicked={this.clicked}
                        id={socialMediaSite.id}
                        key={socialMediaSite.id}
                        name={socialMediaSite.name}

                    />
                    ))
                } </Wrapper>
            </div>
        );
    }
}

export default FavoritesPageList;