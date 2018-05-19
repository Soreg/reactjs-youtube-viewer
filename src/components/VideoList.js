import React from 'react';

import VideoListItem from './VideoListItem';

const VideoList = (props) => {
    console.log(props);
    
    const videoItems = props.videos.map((video) => {
        return <VideoListItem video={video} key={video.id.videoId} onVideoSelect={props.onVideoSelect}/>
    });
    return (
        <ul className="VideoList">
            {videoItems}
        </ul>
    );
}

export default VideoList;