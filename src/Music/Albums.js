import React from 'react';
import $ from 'jquery';
import Playlist from './Playlist';

class Albums extends React.Component {
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
            <div className="albums-window">
                {!showDels && 
                    <div className="menu">
                        <p>Albums</p>
                    <div className="list-item">No Sound Without Silence</div>
                    </div>
                }
                {showDels && <Playlist displayWindow={displayWindow} />}
            </div>
        )
    }
}

export default Albums;