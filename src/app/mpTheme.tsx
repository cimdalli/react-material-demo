import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { fade, darken, lighten } from 'material-ui/utils/colorManipulator';
import * as Colors from 'material-ui/styles/colors';

const mpColor = "#ff8600";

interface MpTheme extends __MaterialUI.Styles.MuiTheme {
    body?: __React.CSSProperties
}

const commonTheme: __MaterialUI.Styles.MuiTheme = {
    palette: {
        primary1Color: lighten(mpColor, 0.3),
        accent1Color: mpColor,
        canvasColor: fade(Colors.fullWhite, 0.03),
        alternateTextColor: Colors.fullBlack
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

const lightMpTheme: MpTheme = {
    body: {
        backgroundColor: Colors.fullWhite,
        color: Colors.fullBlack
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

// const lightTheme: __MaterialUI.Styles.MuiTheme = {
//     palette: {
//         primary1Color: Colors.cyan500,
//         primary2Color: Colors.cyan700,
//         primary3Color: Colors.grey400,
//         accent1Color: Colors.pinkA200,
//         accent2Color: Colors.grey100,
//         accent3Color: Colors.grey500,
//         textColor: Colors.darkBlack,
//         alternateTextColor: Colors.white,
//         canvasColor: Colors.white,
//         borderColor: Colors.grey300,
//         disabledColor: fade(Colors.darkBlack, 0.3),
//         pickerHeaderColor: Colors.cyan500,
//         clockCircleColor: fade(Colors.darkBlack, 0.07),
//         shadowColor: Colors.fullBlack,
//     }
// };

// const darkTheme: __MaterialUI.Styles.MuiTheme = {
//     palette: {
//         primary1Color: Colors.cyan700,
//         primary2Color: Colors.cyan700,
//         primary3Color: Colors.grey600,
//         accent1Color: Colors.pinkA200,
//         accent2Color: Colors.pinkA400,
//         accent3Color: Colors.pinkA100,
//         textColor: Colors.fullWhite,
//         alternateTextColor: '#303030',
//         canvasColor: '#303030',
//         borderColor: fade(Colors.fullWhite, 0.3),
//         disabledColor: fade(Colors.fullWhite, 0.3),
//         pickerHeaderColor: fade(Colors.fullWhite, 0.12),
//         clockCircleColor: fade(Colors.fullWhite, 0.12),
//     }
// };

const muiTheme = (useDarkTheme: boolean) => {

    var bodyStyle = (useDarkTheme ? darkMpTheme : lightMpTheme).body;
    document.body.style.backgroundColor = bodyStyle.backgroundColor;
    document.body.style.color = bodyStyle.color;

    return getMuiTheme(
        // useDarkTheme ? darkBaseTheme : lightBaseTheme,
        commonTheme,
        useDarkTheme ? darkMpTheme : lightMpTheme
    );
}

export {muiTheme}
export {mpColor}