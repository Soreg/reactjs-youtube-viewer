import React, { Component } from 'react';

import SearchForm from './SearchForm';

class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <div className="intro-text">
                    <h1>Youtube Video Finder</h1>
                    <h3>Search, find and view Youtube videos</h3>
                </div>
                <SearchForm getVideos={this.props.getVideos}/>
            </div>
        );
    }
};

export default LandingPage;