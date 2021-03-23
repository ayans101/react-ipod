import React from 'react';
import './App.css';
import Wheel from './Wheel';
import Screen from './Screen';
import ZingTouch from 'zingtouch';
import $ from 'jquery';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentListItem: 0,
      displayMainMenu: true,
      displayHomeScreen: true,
      displayCoverflow: false,
      displayMusicWindow: false,
      displayGamesWindow: false,
      displaySettingsWindow: false,
      displayMusicMenu: false,
      displayAllSongs: false,
      displayArtists: false,
      displayAlbums: false,
      displayTrackDetails: false,
      songs: [
        {
          idx: 0,
          name: "Superheroes",
          path: "./Songs/TheScript/1_Superheroes.m4a",
          img: "./Songs/TheScript/1_Superheroes.jpg",
          singer: "The Script"
        },
        {
          idx: 1,
          name: "Army of Angles",
          path: "./Songs/TheScript/2_Army of Angels.m4a",
          img: "./Songs/TheScript/2_Army of Angels.jpg",
          singer: "The Script"
        },
        {
          idx: 2,
          name: "The Energy Never Dies",
          path: "./Songs/TheScript/3_The Energy Never Dies.m4a",
          img: "./Songs/TheScript/3_The Energy Never Dies.jpg",
          singer: "The Script"
        },
        {
          idx: 3,
          name: "Arms Open",
          path: "./Songs/TheScript/4_Arms Open.m4a",
          img: "./Songs/TheScript/4_Arms Open.jpg",
          singer: "The Script"
        },
        {
          idx: 4,
          name: "Hall of Fame",
          path: "./Songs/TheScript/5_Hall of Fame.m4a",
          img: "./Songs/TheScript/5_Hall of Fame.jpg",
          singer: "The Script"
        }
      ],
      index_no: 0,
      track: document.createElement('audio'),
      playing_song: false
    }
  }

  //  add event listener to capture rotation around wheel
  componentDidMount() {
    let { currentListItem } = this.state;
    document.getElementsByClassName("list-item")[currentListItem].classList.add("active");
    let counter = 0;
    //  create a region to listen for events
    const target = document.querySelector('.rotatable');
    const region = new ZingTouch.Region(target);
    //  bind rotate gesture to the region
    region.bind(target, 'rotate', function(e) {
      counter += e.detail.distanceFromLast;
      // console.log(counter);
      if(counter >= 30){
        let n=0;
        while(document.getElementsByClassName("list-item")[n]){
          n++;
        }
        for(let i=0;i<n;i++){
          if(document.getElementsByClassName("list-item")[i] === document.getElementsByClassName("active")[0]){
            currentListItem = i;
          }
        }
        const prevItem = document.getElementsByClassName("active")[0];
        if(prevItem){
          prevItem.classList.remove('active');
        }
        if(n !== 0){
          currentListItem = (currentListItem + 1) % n;
        }
        console.log("** ", currentListItem);
        const currItem = document.getElementsByClassName("list-item")[currentListItem];
        if(currItem){
          currItem.classList.add('active');
        }
        counter = 0;
      }
      if(counter <= -30){
        let n=0;
        while(document.getElementsByClassName("list-item")[n]){
          n++;
        }
        for(let i=0;i<n;i++){
          if(document.getElementsByClassName("list-item")[i] === document.getElementsByClassName("active")[0]){
            currentListItem = i;
          }
        }
        const prevItem = document.getElementsByClassName("active")[0];
        if(prevItem){
          prevItem.classList.remove('active');
        }
        if(n !== 0){
          currentListItem = currentListItem - 1;
          if(currentListItem === -1){
            currentListItem = n-1;
          }
        }
        console.log("** ", currentListItem);
        const currItem = document.getElementsByClassName("list-item")[currentListItem];
        if(currItem){
          currItem.classList.add('active');
        }
        counter = 0;
      }
    });


    let { songs, track, index_no, playing_song } = this.state;

    // set the src and load the track
    track.src = songs[index_no].path;
    track.load();

    // add listener to play or pause the track 
    $('.play-pause-button').click(() => {
        if(!playing_song){
            track.play();
            playing_song = true;

        }else{
            track.pause();
            playing_song = false;
        }
    });

    // handle click on next and prev button
    $('.next-button').click(() => {
      index_no += 1;
      if(index_no === songs.length){
        index_no = 0;
      }
      track.src = songs[index_no].path;
      track.load();
      track.play();
      playing_song = true;
    })
    $('.prev-button').click(() => {
      index_no -= 1;
      if(index_no === -1){
        index_no = songs.length-1;
      }
      track.src = songs[index_no].path;
      track.load();
      track.play();
      playing_song = true;
    })
    

  }

  componentDidUpdate() {
    let { currentListItem } = this.state;
    const activeLI = document.getElementsByClassName("list-item")[currentListItem];
    if(activeLI){
      activeLI.classList.add("active");
    }
  }

  // Handling click Enter button
  handleClickOnMenuItem = () => {
    let { 
      currentListItem,
      displayMainMenu,
      displayHomeScreen,
      displayCoverflow,
      displayMusicWindow,
      displayGamesWindow,
      displaySettingsWindow,
      displayMusicMenu,
      displayAllSongs,
      displayArtists,
      displayAlbums,
      displayTrackDetails
    } = this.state;

    //  From main menu choose the component to be rendered
    if(displayMainMenu && displayHomeScreen){
      let activeItem = document.getElementsByClassName("active");
      let window = activeItem[0].innerHTML;
      currentListItem = 0;
      displayMainMenu = false;
      displayHomeScreen = false;
      if(window === "Cover Flow"){
        displayCoverflow = true;
        this.setState({
          currentListItem,
          displayMainMenu,
          displayHomeScreen,
          displayCoverflow
        })
      }else if(window === "Music"){
        displayHomeScreen = true;
        displayMusicWindow = true;
        displayMusicMenu = true;
        this.setState({
          currentListItem,
          displayMainMenu,
          displayHomeScreen,
          displayMusicWindow,
          displayMusicMenu
        })
      }else if(window === "Games"){
        displayGamesWindow = true;
        this.setState({
          currentListItem,
          displayMainMenu,
          displayHomeScreen,
          displayGamesWindow
        })
      }else if(window === "Settings"){
        displaySettingsWindow = true;
        this.setState({
          currentListItem,
          displayMainMenu,
          displayHomeScreen,
          displaySettingsWindow
        })
      }
    }
    
    //  From music menu choose the component to be rendered
    if(displayMusicMenu && displayHomeScreen){
        let activeItem = document.getElementsByClassName("active");
        let window = activeItem[0].innerHTML;
        currentListItem = 0;
        displayMusicMenu = false;
        if(window === "All Songs"){
          // displayHomeScreen = false;
          displayAllSongs = true;
          displayTrackDetails = true;
          this.setState({
            currentListItem,
            displayMusicMenu,
            displayHomeScreen,
            displayAllSongs,
            displayTrackDetails
          })
        }else if(window === "Artists"){
          displayArtists = true;
          this.setState({
            currentListItem,
            displayMusicMenu,
            displayHomeScreen,
            displayArtists
          })
        }else if(window === "Albums"){
          displayAlbums = true;
          this.setState({
            currentListItem,
            displayMusicMenu,
            displayHomeScreen,
            displayAlbums
          })
        }
    }

  }

  //  Handling click on menu button
  handleClickOnMenuButton = () => {
    let { 
      currentListItem,
      displayMainMenu,
      displayHomeScreen,
      displayCoverflow,
      displayMusicWindow,
      displayGamesWindow,
      displaySettingsWindow,
      displayMusicMenu,
      displayAllSongs,
      displayArtists,
      displayAlbums,
      displayTrackDetails
    } = this.state;
    
    if(displayCoverflow || (displayMusicWindow && displayMusicMenu) || displayGamesWindow || displaySettingsWindow){
      if(displayCoverflow){
        currentListItem = 0;
      }
      if(displayMusicWindow){
        currentListItem = 1;
      }
      if(displayGamesWindow){
        currentListItem = 2;
      }
      if(displaySettingsWindow){
        currentListItem = 3;
      }
      displayCoverflow = false;
      displayMusicWindow = false;
      displayGamesWindow = false;
      displaySettingsWindow = false;
      displayMainMenu = true;
      displayHomeScreen = true;
      this.setState({
        currentListItem,
        displayMainMenu,
        displayHomeScreen, 
        displayCoverflow, 
        displayMusicWindow,
        displayGamesWindow,
        displaySettingsWindow
      })
    }else if(displayAllSongs || displayArtists || displayAlbums){
      if(displayAllSongs){
        currentListItem = 0;
      }
      if(displayArtists){
        currentListItem = 1;
      }
      if(displayAlbums){
        currentListItem = 2;
      }
      displayAllSongs = false;
      displayTrackDetails = false;
      displayArtists = false;
      displayAlbums = false;
      displayMusicMenu = true;
      displayHomeScreen = true;
      this.setState({
        currentListItem,
        displayHomeScreen,
        displayMusicMenu,
        displayAllSongs,
        displayArtists,
        displayAlbums,
        displayTrackDetails
      })

    }else if(displayMainMenu && displayHomeScreen){
      displayMainMenu = false;
      this.setState({
        displayMainMenu, 
      })
    }else if(!displayMainMenu && displayHomeScreen){
      displayMainMenu = true;
      this.setState({
        displayMainMenu,
      })
    }

  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div className="wrapper">
            <Screen 
            displayWindow={this.state} 
            />
            <Wheel 
            currentListItem={this.state.currentListItem}
            openWindow={this.handleClickOnMenuItem}
            closeWindow={this.handleClickOnMenuButton}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
