"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var RaisedButton_1 = require('material-ui/RaisedButton');
var Dialog_1 = require('material-ui/Dialog');
var colors_1 = require('material-ui/styles/colors');
var FlatButton_1 = require('material-ui/FlatButton');
var getMuiTheme_1 = require('material-ui/styles/getMuiTheme');
var MuiThemeProvider_1 = require('material-ui/styles/MuiThemeProvider');
var mpTable_1 = require("./mpTable");
var styles = {
    container: {
        textAlign: 'center',
        paddingTop: 200,
    },
};
var muiTheme = getMuiTheme_1.default({
    palette: {
        accent1Color: colors_1.deepOrange500,
    }
});
var Main = (function (_super) {
    __extends(Main, _super);
    function Main(props, state) {
        _super.call(this, props, state);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);
        this.state = {
            open: false,
        };
    }
    Main.prototype.handleRequestClose = function () {
        this.setState({
            open: false,
        });
    };
    Main.prototype.handleTouchTap = function () {
        this.setState({
            open: true,
        });
    };
    Main.prototype.render = function () {
        var standardActions = (React.createElement(FlatButton_1.default, {label: "Ok", primary: true, onTouchTap: this.handleRequestClose}));
        return (React.createElement(MuiThemeProvider_1.default, {muiTheme: muiTheme}, React.createElement("div", {style: styles.container}, React.createElement(Dialog_1.default, {open: this.state.open, title: "Super Secret Password", actions: standardActions, onRequestClose: this.handleRequestClose}, "1-2-3-4-5-6-7", React.createElement(mpTable_1.default, null)), React.createElement("h1", null, "Material-UI ads"), React.createElement("h2", null, "example project"), React.createElement(RaisedButton_1.default, {label: "Super Secret Password", secondary: true, onTouchTap: this.handleTouchTap}))));
    };
    return Main;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Main;
//# sourceMappingURL=Main.js.map