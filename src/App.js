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
      displaySettingsWindow: false
    }
  }

  //  add event listener to capture rotation around wheel
  componentDidMount() {
    let { currentListItem } = this.state;
    let counter = 0;
    const target = document.querySelector('.rotatable');
    const region = new ZingTouch.Region(target);
    region.bind(target, 'rotate', function(e) {
      counter += e.detail.distanceFromLast;
      console.log(counter);
      if(counter >= 30){
        document.getElementsByClassName("list-item")[currentListItem].classList.toggle('active');
        currentListItem = (currentListItem + 1) % 4;
        document.getElementsByClassName("list-item")[currentListItem].classList.toggle('active');
        counter = 0;
      }
      if(counter <= -30){
        document.getElementsByClassName("list-item")[currentListItem].classList.toggle('active');
        currentListItem = currentListItem - 1;
        if(currentListItem === -1){
          currentListItem = 3;
        }
        document.getElementsByClassName("list-item")[currentListItem].classList.toggle('active');
        counter = 0;
      }
    });
  }

  // Handling click on a menu item
  handleClickOnMenu = () => {
    let { 
      displayMainMenu,
      displayHomeScreen, 
      displayCoverflow, 
      displayMusicWindow,
      displayGamesWindow,
      displaySettingsWindow 
    } = this.state;
    const activeItem = document.getElementsByClassName("active");
    const window = activeItem[0].innerHTML;
    if(displayMainMenu && displayHomeScreen){
      displayMainMenu = false;
      displayHomeScreen = false;
      if(window == "Cover Flow"){
        displayCoverflow = true;
        this.setState({
          displayMainMenu,
          displayHomeScreen,
          displayCoverflow
        })
      }else if(window == "Music"){
        displayMusicWindow = true;
        this.setState({
          displayMainMenu,
          displayHomeScreen,
          displayMusicWindow
        })
      }else if(window == "Games"){
        displayGamesWindow = true;
        this.setState({
          displayMainMenu,
          displayHomeScreen,
          displayGamesWindow
        })
      }else if(window == "Settings"){
        displaySettingsWindow = true;
        this.setState({
          displayMainMenu,
          displayHomeScreen,
          displaySettingsWindow
        })
      }
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
          openWindow={this.handleClickOnMenu}
          />
        </header>
      </div>
    );
  }
}

export default App;
