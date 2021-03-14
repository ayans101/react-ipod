import React from "react";

//  import and add material ui react components
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PauseIcon from '@material-ui/icons/Pause';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

//  update material ui themes with ThemeProvider
const theme = createMuiTheme({
    palette: {
      primary: {
        main: grey[700]
      }
    }
});

class Wheel extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div className="wheel">
                    <div className="rotatable">
                        <div>
                            <Button color="primary" className="menu-button">
                                MENU
                            </Button>
                        </div>
                        <div className="wheel-mid-div">
                            <IconButton className="prev-button">
                                <SkipPreviousIcon />
                            </IconButton>
                            <div className="enter-button"></div>
                            <IconButton className="next-IconButton">
                                <SkipNextIcon />
                            </IconButton>
                        </div>
                        <div>
                            <IconButton className="play-pause-button">
                                <PauseIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        );
    }
};

export default Wheel;
