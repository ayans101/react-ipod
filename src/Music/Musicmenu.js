import React from 'react';

class Musicmenu extends React.Component {
    render() {
        return (
            <div className="music-menu">
                <p>Music</p>
                <div className="list-item">All Songs</div>
                <div className="list-item">Artists</div>
                <div className="list-item">Albums</div>
            </div>
        )
    }
}

export default Musicmenu;