import React from 'react';

class Screen extends React.Component {
    render() {
        return (
            <div className="screen">
                <div className="menu">
                    <p>iPod</p>
                    <div className="list-item active">Cover Flow</div>
                    <div className="list-item">Music</div>
                    <div className="list-item">Games</div>
                    <div className="list-item">Settings</div>
                </div>
            </div>
        )
    }
}

export default Screen;