import React from 'react';
import Track from './Track';

class Playlist extends React.Component {
    render() {
        const { displayWindow } = this.props;
        return (
            <div className="playlist">
                Playlist
                <Track displayWindow={displayWindow} />
            </div>
        )
    }
}

export default Playlist;