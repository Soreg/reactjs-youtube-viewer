import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    return (
        <li onClick={() => onVideoSelect(video)} className="VideoListItem">
            <h5>{video.snippet.title}</h5>
            <p>{video.snippet.description}</p>
        </li>
    );
};

export default VideoListItem;