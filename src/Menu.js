import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <p>iPod</p>
                <div className="list-item">Cover Flow</div>
                <div className="list-item">Music</div>
                <div className="list-item">Games</div>
                <div className="list-item">Settings</div>
            </div>
        )
    }
}

export default Menu;