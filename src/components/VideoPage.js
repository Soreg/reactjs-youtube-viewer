import React, { Component } from 'react';

import SearchFrom from './SearchForm';
import VideoDetails from './VideoDetails';
import VideoList from './VideoList';

const VideoPage = (props) => {
    return (
        <div className="VideoPage">
            <h1>
                <SearchFrom />
                <VideoDetails />
                <VideoList />
            </h1>
        </div>
    );
};

export default VideoPage;