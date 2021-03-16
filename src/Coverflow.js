import React from 'react';
import logo from "./logo.svg";

class Coverflow extends React.Component {
    render() {
        return (
            <div className="coverflow-window">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Coverflow</p>
            </div>
        )
    }
}

export default Coverflow;