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
                <VideoDetails selectedVideo={props.selectedVideo}/>
                <VideoList videos={props.videos} onVideoSelect={props.onVideoSelect}/>
            </div>
        </div>
    );
};

export default VideoPage;