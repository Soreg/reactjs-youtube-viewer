import React from 'react';

const VideoListItem = (props) => {
    return (
        <li className="VideoListItem">
            <h5>{props.video.snippet.title}</h5>
            <p>{props.video.snippet.description}</p>
        </li>
    );
};

export default VideoListItem;