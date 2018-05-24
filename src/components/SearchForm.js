import React from 'react';

const SearchForm = ({getVideos}) => {
    return (
        <form onSubmit={getVideos}>
            <input type="text" name="search" placeholder="Search"/>
            <button>Search</button>
        </form>
    );
};

export default SearchForm;