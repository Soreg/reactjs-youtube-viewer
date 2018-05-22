import React from 'react';

const VideoDetails = (props) => {
    const videoID = props.selectedVideo.id.videoId;
    const videoUrl = `http://www.youtube.com/embed/${videoID}`;

    return(
        <div className="VideoDetails">
            <div className="video-player">
                <iframe src={videoUrl}>

                </iframe>
            </div>
            <div className="video-details">
                <h3>{props.selectedVideo.snippet.title}</h3>
                <p>{props.selectedVideo.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetails;