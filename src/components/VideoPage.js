import React from 'react';

import SearchFrom from './SearchForm';
import VideoDetails from './VideoDetails';
import VideoList from './VideoList';

const VideoPage = (props) => {
    return (
        <div className="VideoPage">
        <div className="page-header">
            <SearchFrom getVideos={props.getVideos}/>
        </div>
            <div className="video-screen">
                <VideoDetails videoDetails={props.videoDetails}/>
                <VideoList videos={props.videos}/>
            </div>
        </div>
    );
};

export default VideoPage;