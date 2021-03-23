import React from 'react';
import Board from './Board';

class Games extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }
    componentDidMount() {
        let { loading } = this.state;
        let _this = this;
        setTimeout(f,3000);
        function f() {
            loading = false;
            _this.setState({
                loading
            })
        }
    }
    render() {
        const { loading } = this.state;
        return (
            <div className="games-window">
                {   loading &&
                    <div className="game-loading">
                        <img src="./img/joystick.png" alt="Games" />
                        <p>Game loading......</p>
                        <h6>Use arrow keys on keyboard to move the snake</h6>
                    </div>
                }
                {!loading && <Board />}
            </div>
        )
    }
}

export default Games;