import React from 'react';
import axios from 'axios';
import './style.css'



export default class GoogleNews extends React.Component {
    state = {

        headlines: []

        };

    componentDidMount() {
        this.loadHeadlines();
    }
    loadHeadlines = () => {
      
        let googleNewsUrl = 'http://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=7703389101e14a398669ead8d47212f0'
                        axios.get(googleNewsUrl)
        
                            .then(res => 
                     
                         this.setState({
                             headlines: res.data.articles
                     
                                })
                       
                            )}

    render() {
        return (
            <div className="googleHeadlinesContainer"><strong>Headlines</strong>
            {this.state.headlines.map(headline => (
             <div className="individualHeadlineContainer" key={headline.title}>
   

               <a className="headlineLink" target="_blank" rel="noopener noreferrer" href={headline.url}>{headline.title}</a> 
         
         </div>
             
            ))}
             </div>
        )
    }
}