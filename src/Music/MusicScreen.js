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
                {displayWindow.displayAllSongs && <Playlist displayWindow={displayWindow} />}
                {displayWindow.displayArtists && <Artists displayWindow={displayWindow} />}
                {displayWindow.displayAlbums && <Albums displayWindow={displayWindow} />}
            </div>
        )
    }
}

export default MusicScreen;