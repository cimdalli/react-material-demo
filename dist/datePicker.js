"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var DatePicker_1 = require('material-ui/DatePicker');
var DatePickerx = (function (_super) {
    __extends(DatePickerx, _super);
    function DatePickerx() {
        _super.apply(this, arguments);
    }
    DatePickerx.prototype.render = function () {
        return (React.createElement("div", null, React.createElement(DatePicker_1.default, {hintText: "Portrait Dialog"}), React.createElement(DatePicker_1.default, {hintText: "Landscape Dialog", mode: "landscape"}), React.createElement(DatePicker_1.default, {hintText: "Dialog Disabled", disabled: true})));
    };
    return DatePickerx;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DatePickerx;
//# sourceMappingURL=datePicker.js.map