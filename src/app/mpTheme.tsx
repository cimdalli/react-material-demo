import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { fade, darken, lighten } from 'material-ui/utils/colorManipulator';
import * as Colors from 'material-ui/styles/colors';

const mpColor = "#ff8600";

interface MpTheme extends __MaterialUI.Styles.MuiTheme {
    body?: __React.CSSProperties
}

const lightMpTheme: MpTheme = {
    body: {
        backgroundColor: Colors.fullWhite,
        color: Colors.fullBlack
    },
    palette: {
        primary1Color: lighten(mpColor, 0.3),
        accent1Color: mpColor,
        canvasColor: fade(Colors.fullWhite, 0.03),
        alternateTextColor: Colors.fullBlack
    },
    tableRow: {
        hoverColor: fade(Colors.grey200, 0.3),
        selectedColor: fade(Colors.grey400, 0.2),
    },
    tabs: {
        backgroundColor: fade(Colors.fullWhite, 0.3)
    },
    toggle: {
        trackOnColor: fade(Colors.fullBlack, 0.2),
        trackOffColor: fade(Colors.fullBlack, 0.3),
        thumbOnColor: lighten(mpColor, 0.2)
    }
};

const darkMpTheme: MpTheme = {
    body: {
        backgroundColor: Colors.blueGrey900,
        color: Colors.grey400
    },
    palette: {
        textColor: Colors.grey200,
        alternateTextColor: Colors.fullWhite
    }   
};

const muiTheme = (useDarkTheme: boolean) => {

    var theme = (useDarkTheme ? darkMpTheme : lightMpTheme);
    document.body.style.backgroundColor = theme.body.backgroundColor;
    document.body.style.color = theme.body.color;

    return getMuiTheme(
        lightMpTheme,
        useDarkTheme ? darkMpTheme : lightMpTheme
    );
}

export {muiTheme}
export {mpColor}