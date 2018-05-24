import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import './App.css';

import LandingPage from './components/LandingPage';
import VideoPage from './components/VideoPage';

const API_KEY = 'AIzaSyBszcVajK4ogGeXLwoetrmZQFUye_rC_Ts';

class App extends Component {
  state = {
    isSearched: false,
    videos: undefined,
    selectedVideo: undefined
  }


  getVideos = async (e) => {
    e.preventDefault();
    var searchValue = e.target.elements.search.value;

    // Search for videos
    YTSearch({key: API_KEY, term: searchValue}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
      if(!this.state.isSearched) {
        this.setState({
          isSearched: true
        })
      }
    });

  };

  render() {
    return (
      <div className="App">
        { !this.state.isSearched && <LandingPage getVideos={this.getVideos}/> }
        { this.state.isSearched ? <VideoPage getVideos={this.getVideos} selectedVideo={this.state.selectedVideo} videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})}/> : null }

      </div>
    );
  }
}

export default App;
