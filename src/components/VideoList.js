import React from 'react';

import VideoListItem from './VideoListItem';

const VideoList = ({videos, onVideoSelect}) => {
    
    const videoItems = videos.map((video) => {
        return <VideoListItem video={video} key={video.id.videoId} onVideoSelect={onVideoSelect}/>
    });
    return (
        <ul className="VideoList">
            {videoItems}
        </ul>
    );
}

export default VideoList;