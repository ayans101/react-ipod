import React from 'react';
import MusicScreen from './MusicScreen';

class Music extends React.Component {
    render() {
        const { displayWindow } = this.props;
        console.log(displayWindow);
        return (
            <div className="music-header">
                <div className="music-window">
                    <MusicScreen
                    displayWindow={displayWindow} 
                    />
                </div>
            </div>
        )
    }
}

export default Music;