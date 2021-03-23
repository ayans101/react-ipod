import React from 'react';
import $ from 'jquery';

class Track extends React.Component {
    componentDidMount(){
        const { displayWindow } = this.props;
        let { songs, track, index_no } = displayWindow;
        let duration;
        // display time at 00 format inserting pad() function on above
        function pad(d){
            return (d<10) ? '0'+d.toString() : d.toString();
        }
        function display(){
            if($('#title')[0]){
                $('#title')[0].innerHTML = songs[index_no].name;
            }
            if($('#track_image')[0]){
                $('#track_image')[0].src = songs[index_no].img;
            }
            if($('#artist')[0]){
                $('#artist')[0].innerHTML = songs[index_no].singer;
            }
            // console.log(duration);
            if($('#currentTime')[0]){
                $('#currentTime')[0].innerHTML = "00:00";
            }
            function timer(){
                let currentTime = track.currentTime;
                // console.log(currentTime);
                if($('#currentTime')[0]){
                    $('#currentTime')[0].innerHTML = pad(parseInt(currentTime/60))+':'+pad(parseInt(currentTime%60));
                }
                let slider = (currentTime * 210 /duration) + "px";
                // console.log(slider);
                if($('#progress')[0]){
                    $('#progress')[0].style.width = slider;
                }
                // if(currentTime>=duration){
                //     clearInterval(interval);
                // }
            }
            // let interval = setInterval(timer,1000);
            setInterval(timer,1000);

        }

        duration = track.duration;
        if($('#fullDuration')[0]){
            $('#fullDuration')[0].innerHTML = pad(parseInt(duration/60))+':'+pad(parseInt(duration%60));
        }
        display();

        // handle click on next and prev button
        $('.next-button').click(() => {
            index_no += 1;
            if(index_no === songs.length){
                index_no = 0;
            }
            track.onloadedmetadata = () => {
                duration = track.duration;
                if($('#fullDuration')[0]){
                    $('#fullDuration')[0].innerHTML = pad(parseInt(duration/60))+':'+pad(parseInt(duration%60));
                }
            }
            display();
        })

    }
    render() {
        return (
            <div className="track-window">
                <div id="details">
                    <img id="track_image" src="" alt="track_image" />
                    <div id="track_details">
                        <span id="title"></span>
                        <span id="artist"></span>
                    </div>
                </div>
                <div id="duration">
                    <div id="duration_slider">
                        <div id="progress"></div>
                    </div>
                    <div id="timer">
                        <span id="currentTime"></span>
                        <span id="fullDuration"></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Track;