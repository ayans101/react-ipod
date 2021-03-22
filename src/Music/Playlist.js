import React from 'react';
import Track from './Track';

class Playlist extends React.Component {
    render() {
        return (
            <div className="playlist">
                Playlist
                <Track />
            </div>
        )
    }
}

export default Playlist;