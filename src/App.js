import React from 'react';
import './App.css';
import Wheel from './Wheel';
import Screen from './Screen';
import ZingTouch from 'zingtouch';

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
      displayAlbums: false
    }
  }

  //  add event listener to capture rotation around wheel
  componentDidMount() {
    let { currentListItem } = this.state;
    let counter = 0;
    const target = document.querySelector('.rotatable');
    target.draggable = false;
    const region = new ZingTouch.Region(target);
    region.bind(target, 'rotate', function(e) {
      counter += e.detail.distanceFromLast;
      console.log(counter);
      if(counter >= 30){
        const prevItem = document.getElementsByClassName("list-item")[currentListItem];
        if(prevItem){
          prevItem.classList.remove('active');
        }
        currentListItem = (currentListItem + 1) % 4;
        const currItem = document.getElementsByClassName("list-item")[currentListItem]
        if(currItem){
          currItem.classList.add('active');
        }
        counter = 0;
      }
      if(counter <= -30){
        const prevItem = document.getElementsByClassName("list-item")[currentListItem];
        if(prevItem){
          prevItem.classList.remove('active');
        }
        currentListItem = currentListItem - 1;
        if(currentListItem === -1){
          currentListItem = 3;
        }
        const currItem = document.getElementsByClassName("list-item")[currentListItem]
        if(currItem){
          currItem.classList.add('active');
        }
        counter = 0;
      }
    });
  }

  // Handling click on a menu item
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
      displayAlbums
    } = this.state;

    //  From main menu choose the component to be rendered
    if(displayMainMenu && displayHomeScreen){
      let activeItem = document.getElementsByClassName("active");
      let window = activeItem[0].innerHTML;
      displayMainMenu = false;
      displayHomeScreen = false;
      if(window === "Cover Flow"){
        displayCoverflow = true;
        this.setState({
          displayMainMenu,
          displayHomeScreen,
          displayCoverflow
        })
      }else if(window === "Music"){
        displayHomeScreen = true;
        displayMusicWindow = true;
        displayMusicMenu = true;
        this.setState({
          displayMainMenu,
          displayHomeScreen,
          displayMusicWindow,
          displayMusicMenu
        })
      }else if(window === "Games"){
        displayGamesWindow = true;
        this.setState({
          displayMainMenu,
          displayHomeScreen,
          displayGamesWindow
        })
      }else if(window === "Settings"){
        displaySettingsWindow = true;
        this.setState({
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
        displayMusicMenu = false;
        displayHomeScreen = false;
        if(window === "All Songs"){
            displayAllSongs = true;
            this.setState({
                displayMusicMenu,
                displayHomeScreen,
                displayAllSongs
            })
        }else if(window === "Artists"){
            displayArtists = true;
            this.setState({
                displayMusicMenu,
                displayHomeScreen,
                displayArtists
            })
        }else if(window === "Albums"){
            displayAlbums = true;
            this.setState({
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
      displayMainMenu,
      displayHomeScreen, 
      displayCoverflow, 
      displayMusicWindow,
      displayGamesWindow,
      displaySettingsWindow 
    } = this.state;
    
    if(displayCoverflow || displayMusicWindow || displayGamesWindow || displaySettingsWindow){
      displayCoverflow = false;
      displayMusicWindow = false;
      displayGamesWindow = false;
      displaySettingsWindow = false;
      displayMainMenu = true;
      displayHomeScreen = true;
      this.setState({
        displayMainMenu,
        displayHomeScreen, 
        displayCoverflow, 
        displayMusicWindow,
        displayGamesWindow,
        displaySettingsWindow 
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
          <Screen 
          displayWindow={this.state} 
          />
          <Wheel 
          currentListItem={this.state.currentListItem}
          openWindow={this.handleClickOnMenuItem}
          closeWindow={this.handleClickOnMenuButton}
          />
        </header>
      </div>
    );
  }
}

export default App;
