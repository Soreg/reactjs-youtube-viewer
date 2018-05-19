import React, { Component } from 'react';

import VideoListItem from './VideoListItem';

const VideoList = (props) => {
    return (
        <ul className="VideoList">
            <VideoListItem />
        </ul>
    );
}

export default VideoList;