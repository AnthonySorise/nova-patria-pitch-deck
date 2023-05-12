import React from 'react';
import video01 from '../assets/video01.mp4'
import video02 from '../assets/video02.mp4'
import video03 from '../assets/video03.mp4'
import video04 from '../assets/video04.mp4'
import './VideoShowcase.scss'

function VideoShowcase() {
    return (
        <div className="video-grid">
            <div className="video-item">
                <video loop muted autoPlay={true}>
                    <source src={video01} type="video/mp4" />
                </video>
            </div>
            <div className="video-item">
                <video loop muted autoPlay={true}>
                    <source src={video02} type="video/mp4" />
                </video>
            </div>
            <div className="video-item">
                <video loop muted autoPlay={true}>
                    <source src={video03} type="video/mp4" />
                </video>
            </div>
            <div className="video-item">
                <video loop muted autoPlay={true}>
                    <source src={video04} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}

export default VideoShowcase;