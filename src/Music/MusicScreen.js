import React from 'react';
import Musicmenu from './Musicmenu';
import Home from '../Home';
import Playlist from './Playlist';
import Artists from './Artists';
import Albums from './Albums';

class MusicScreen extends React.Component {
    render() {
        const { displayWindow } = this.props;
        console.log(displayWindow);
        return (
            <div className="music-screen">
                {displayWindow.displayMusicMenu && <Musicmenu />}
                {displayWindow.displayHomeScreen && <Home />}
                {displayWindow.displayPlaylist && <Playlist />}
                {displayWindow.displayArtists && <Artists />}
                {displayWindow.displayAlbums && <Albums />}
            </div>
        )
    }
}

export default MusicScreen;