import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { fade, darken, lighten, emphasize } from 'material-ui/utils/colorManipulator';
import * as Colors from 'material-ui/styles/colors';


const mpColor = "#ff8600";

class MpTheme {

    palette: __MaterialUI.Styles.ThemePalette;

    constructor(
        public backgroundColor: string,
        public textColor: string,
        public accentColor: string) {
        this.palette = {
            primary1Color: lighten(accentColor, 0.3),
            accent1Color: this.accentColor,
            accent2Color: fade(Colors.fullWhite, 0.5),
            canvasColor: lighten(this.backgroundColor, 0.1),
            textColor: this.textColor,
            alternateTextColor: this.textColor
        }
    }

    get(): __MaterialUI.Styles.MuiTheme {
        return {
            palette: this.palette,
            checkbox: {
                boxColor: fade(this.textColor, 0.3)
            },
            drawer: {
                color: this.backgroundColor
            },
            raisedButton: {
                color: this.backgroundColor
            },
            tableRow: {
                hoverColor: fade(Colors.grey200, 0.3),
                selectedColor: fade(Colors.grey400, 0.2),
            },
            toggle: {
                trackOnColor: fade(Colors.fullBlack, 0.2),
                trackOffColor: fade(Colors.fullBlack, 0.3),
                thumbOnColor: lighten(this.accentColor, 0.2),
                thumbOffColor: Colors.grey300
            },
            tabs: {
                backgroundColor: fade(Colors.fullWhite, 0.3)
            }
        };
    }
}

const lightMpTheme = new MpTheme(Colors.fullWhite, Colors.fullBlack, mpColor);
const darkMpTheme = new MpTheme(Colors.blueGrey900, Colors.grey300, mpColor);

const muiTheme = (useDarkTheme: boolean) => {

    var theme = (useDarkTheme ? darkMpTheme : lightMpTheme);
    document.body.style.backgroundColor = theme.backgroundColor;
    document.body.style.color = theme.textColor;

    return getMuiTheme(theme.get());
}

export {muiTheme}
export {mpColor}