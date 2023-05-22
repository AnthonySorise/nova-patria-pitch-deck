import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import video01 from '../assets/video01.mp4';
import video02 from '../assets/video02.mp4';
import video03 from '../assets/video03.mp4';
import video04 from '../assets/video04.mp4';
import './VideoShowcase.scss';

function VideoShowcase() {
    const [areVideosLoaded, setAreVideosLoaded] = useState([false, false, false, false]);

    const handleVideoLoad = (index) => {
        setAreVideosLoaded((prevLoadedStatus) => {
            const updatedLoadedStatus = [...prevLoadedStatus];
            updatedLoadedStatus[index] = true;
            return updatedLoadedStatus;
        });
    };

    const videos = [video01, video02, video03, video04]; // Array of video paths

    return (
        <div className="video-grid">
            {videos.map((video, index) => (
                <div className="video-item" key={index}>
                    <div className="video-item-overlay">
                        {!areVideosLoaded[index] && <CircularProgress size={60} />}
                    </div>
                    <video loop muted autoPlay={true} onLoadedData={() => handleVideoLoad(index)}>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            ))}
        </div>
    );
}

export default VideoShowcase;