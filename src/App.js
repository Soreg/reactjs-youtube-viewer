import React, { Component } from 'react';
import './App.css';

import LandingPage from './components/LandingPage';

const API_KEY = "AIzaSyD5uTBbjPwjTq_fs1vdJZOErVVSkjTZdZo";

class App extends Component {
  state = {
    isSearched: false
  }


  getVideos = async (e) => {
    e.preventDefault();
    var searchValue = e.target.elements.search.value;

    const api_call = await fetch(`https://www.googleapis.com/youtube/v3/search&q=${searchValue}`);
    const data = await api_call.json();
    
    
  };

  render() {
    return (
      <div className="App">
        { !this.state.isSearched && <LandingPage getVideos={this.getVideos}/> }
      </div>
    );
  }
}

export default App;
