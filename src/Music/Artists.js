import React from 'react';
import $ from 'jquery';
import Playlist from './Playlist';

class Artists extends React.Component {
    constructor() {
        super();
        this.state = {
            showDels: false
        }
    }
    componentDidMount() {
        let { showDels } = this.state;
        $('.enter-button').click(() => {
            showDels = true;
            this.setState({
                showDels
            })
        })
    }
    render() {
        const { displayWindow } = this.props;
        const { showDels } = this.state;
        return (
            <div className="artists-window">
                {!showDels && 
                    <div className="menu">
                        <p>Artists</p>
                        <div className="list-item">The Script</div>
                    </div>
                }
                {showDels && <Playlist displayWindow={displayWindow} />}
            </div>
        )
    }
}

export default Artists;