"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Table_1 = require('material-ui/Table');
var TextField_1 = require('material-ui/TextField');
var Toggle_1 = require('material-ui/Toggle');
var MpTable = (function (_super) {
    __extends(MpTable, _super);
    function MpTable() {
        var _this = this;
        _super.call(this);
        this.handleToggle = function (event, toggled) {
            _this.setState((_a = {},
                _a[event.target.name] = toggled,
                _a
            ));
            var _a;
        };
        this.handleChange = function (event) {
            _this.setState({ height: event.target.value });
        };
        this.tableData = [
            {
                name: 'John Smith',
                status: 'Employed',
                selected: true,
            },
            {
                name: 'Randal White',
                status: 'Unemployed',
            },
            {
                name: 'Stephanie Sanders',
                status: 'Employed',
                selected: true,
            },
            {
                name: 'Steve Brown',
                status: 'Employed',
            },
            {
                name: 'Joyce Whitten',
                status: 'Employed',
            },
            {
                name: 'Samuel Roberts',
                status: 'Employed',
            },
            {
                name: 'Adam Moore',
                status: 'Employed',
            },
        ];
        this.styles = {
            propContainer: {
                width: 200,
                overflow: 'hidden',
                margin: '20px auto 0',
            },
            propToggleHeader: {
                margin: '20px auto 10px',
            },
        };
        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: true,
            enableSelectAll: true,
            deselectOnClickaway: true,
            showCheckboxes: true,
            height: '300px',
        };
    }
    MpTable.prototype.render = function () {
        return (React.createElement("div", null, React.createElement(Table_1.Table, {height: this.state.height, fixedHeader: this.state.fixedHeader, fixedFooter: this.state.fixedFooter, selectable: this.state.selectable, multiSelectable: this.state.multiSelectable}, React.createElement(Table_1.TableHeader, {displaySelectAll: this.state.showCheckboxes, adjustForCheckbox: this.state.showCheckboxes, enableSelectAll: this.state.enableSelectAll}, React.createElement(Table_1.TableRow, null, React.createElement(Table_1.TableHeaderColumn, {colSpan: 3, tooltip: "Super Header", style: { textAlign: 'center' }}, "Super Header")), React.createElement(Table_1.TableRow, null, React.createElement(Table_1.TableHeaderColumn, {tooltip: "The ID"}, "ID"), React.createElement(Table_1.TableHeaderColumn, {tooltip: "The Name"}, "Name"), React.createElement(Table_1.TableHeaderColumn, {tooltip: "The Status"}, "Status"))), React.createElement(Table_1.TableBody, {displayRowCheckbox: this.state.showCheckboxes, deselectOnClickaway: this.state.deselectOnClickaway, showRowHover: this.state.showRowHover, stripedRows: this.state.stripedRows}, this.tableData.map(function (row, index) { return (React.createElement(Table_1.TableRow, {key: index, selected: row.selected}, React.createElement(Table_1.TableRowColumn, null, index), React.createElement(Table_1.TableRowColumn, null, row.name), React.createElement(Table_1.TableRowColumn, null, row.status))); })), React.createElement(Table_1.TableFooter, {adjustForCheckbox: this.state.showCheckboxes}, React.createElement(Table_1.TableRow, null, React.createElement(Table_1.TableRowColumn, null, "ID"), React.createElement(Table_1.TableRowColumn, null, "Name"), React.createElement(Table_1.TableRowColumn, null, "Status")), React.createElement(Table_1.TableRow, null, React.createElement(Table_1.TableRowColumn, {colSpan: 3, style: { textAlign: 'center' }}, "Super Footer")))), React.createElement("div", {style: this.styles.propContainer}, React.createElement("h3", null, "Table Properties"), React.createElement(TextField_1.default, {floatingLabelText: "Table Body Height", defaultValue: this.state.height, onChange: this.handleChange}), React.createElement(Toggle_1.default, {name: "fixedHeader", label: "Fixed Header", onToggle: this.handleToggle, defaultToggled: this.state.fixedHeader}), React.createElement(Toggle_1.default, {name: "fixedFooter", label: "Fixed Footer", onToggle: this.handleToggle, defaultToggled: this.state.fixedFooter}), React.createElement(Toggle_1.default, {name: "selectable", label: "Selectable", onToggle: this.handleToggle, defaultToggled: this.state.selectable}), React.createElement(Toggle_1.default, {name: "multiSelectable", label: "Multi-Selectable", onToggle: this.handleToggle, defaultToggled: this.state.multiSelectable}), React.createElement(Toggle_1.default, {name: "enableSelectAll", label: "Enable Select All", onToggle: this.handleToggle, defaultToggled: this.state.enableSelectAll}), React.createElement("h3", {style: this.styles.propToggleHeader}, "TableBody Properties"), React.createElement(Toggle_1.default, {name: "deselectOnClickaway", label: "Deselect On Clickaway", onToggle: this.handleToggle, defaultToggled: this.state.deselectOnClickaway}), React.createElement(Toggle_1.default, {name: "stripedRows", label: "Stripe Rows", onToggle: this.handleToggle, defaultToggled: this.state.stripedRows}), React.createElement(Toggle_1.default, {name: "showRowHover", label: "Show Row Hover", onToggle: this.handleToggle, defaultToggled: this.state.showRowHover}), React.createElement("h3", {style: this.styles.propToggleHeader}, "Multiple Properties"), React.createElement(Toggle_1.default, {name: "showCheckboxes", label: "Show Checkboxes", onToggle: this.handleToggle, defaultToggled: this.state.showCheckboxes}))));
    };
    return MpTable;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MpTable;
//# sourceMappingURL=mpTable.js.map