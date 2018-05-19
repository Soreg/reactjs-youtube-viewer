import React from 'react';

import SearchFrom from './SearchForm';
import VideoDetails from './VideoDetails';
import VideoList from './VideoList';

const VideoPage = (props) => {
    return (
        <div className="VideoPage">
            <h1>
                <SearchFrom getVideos={props.getVideos}/>
                <div className="video-screen">
                    <VideoDetails videoDetails={props.videoDetails}/>
                    <VideoList videos={props.videos}/>
                </div>
            </h1>
        </div>
    );
};

export default VideoPage;