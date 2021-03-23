import React from 'react';
import Menu from './Menu';
import Coverflow from './Coverflow';
import Music from './Music/Music';
import Games from './Game/Games';
import Settings from './Settings';
import Home from './Home'

class Screen extends React.Component {
    render() {
        const { displayWindow } = this.props;
        console.log(displayWindow);
        return (
            <div className="screen">
                {displayWindow.displayMainMenu && <Menu />}
                {displayWindow.displayHomeScreen && <Home />}
                {displayWindow.displayCoverflow && <Coverflow />}
                {displayWindow.displayMusicWindow && <Music displayWindow={displayWindow}/>}
                {displayWindow.displayGamesWindow && <Games />}
                {displayWindow.displaySettingsWindow && <Settings />}
            </div>
        )
    }
}

export default Screen;