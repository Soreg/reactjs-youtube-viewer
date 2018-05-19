import React from 'react';

import VideoListItem from './VideoListItem';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem video={video} key={video.id.videoId}/>
    });
    return (
        <ul className="VideoList">
            {videoItems}
        </ul>
    );
}

export default VideoList;