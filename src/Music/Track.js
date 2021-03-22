import React from 'react';

class Track extends React.Component {
    render() {
        return (
            <div className="track-window">
                <div id="details">
                    <img id="track_image" src="" alt="track_image" />
                    <div id="track_details">
                        <span id="title"></span>
                        <span id="artist"></span>
                    </div>
                </div>
                <div id="duration">
                    <div id="duration_slider">
                        <div id="progress"></div>
                    </div>
                    <div id="timer">
                        <span id="currentTime"></span>
                        <span id="fullDuration"></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Track;