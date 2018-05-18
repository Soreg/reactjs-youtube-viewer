import React, { Component } from 'react';

class SearchForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.getVideos}>
                <input type="text" name="search" placeholder="Search"/>
                <button>Search</button>
            </form>
        );
    }
};

export default SearchForm;