import React from 'react';

const VideoDetails = ({selectedVideo}) => {
    const videoID = selectedVideo.id.videoId;
    const videoUrl = `http://www.youtube.com/embed/${videoID}`;

    return(
        <div className="VideoDetails">
            <div className="video-player">
                <iframe src={videoUrl} title="Youtube viewer"></iframe>
            </div>
            <div className="video-details">
                <h3>{selectedVideo.snippet.title}</h3>
                <p>{selectedVideo.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetails;