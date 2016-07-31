import * as React from "react"
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import * as _ from "lodash";

export default class MpTable extends React.Component<any, any> {
    constructor(props: any, state: any) {
        super(props, state);

        this.state = {
            fixedHeader: false,
            fixedFooter: false,
            stripedRows: false,
            showRowHover: true,
            selectable: true,
            multiSelectable: true,
            enableSelectAll: true,
            deselectOnClickaway: false,
            showCheckboxes: true,
            data: [
                {
                    name: 'John Smith',
                    status: 'Employed',
                    selected: false,
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
            ]
        };

        this.selectRow = this.selectRow.bind(this);
    }

    selectRow(index: number[]) {



        this.setState({
            data: _.map(this.state.data, (m: any, i: number) => {
                m.selected = index.indexOf(i) != -1;
                return m;
            })
        });
    }

    render() {
        return (
            <Table
                height={this.state.height}
                fixedHeader={this.state.fixedHeader}
                fixedFooter={this.state.fixedFooter}
                selectable={this.state.selectable}
                multiSelectable={this.state.multiSelectable}
                onRowSelection={this.selectRow}
                >
                <TableHeader
                    displaySelectAll={this.state.showCheckboxes}
                    adjustForCheckbox={this.state.showCheckboxes}
                    enableSelectAll={this.state.enableSelectAll}
                    >
                    <TableRow>
                        <TableHeaderColumn colSpan={3} tooltip="Super Header" style={{ textAlign: 'center' }}>
                            Super Header
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={this.state.showCheckboxes}
                    deselectOnClickaway={this.state.deselectOnClickaway}
                    showRowHover={this.state.showRowHover}
                    stripedRows={this.state.stripedRows}
                    >
                    {
                        this.state.data.map((row: any, index: any) => (
                            <TableRow key={index} selected={row.selected} >
                                <TableRowColumn>{index}</TableRowColumn>
                                <TableRowColumn>{row.name}</TableRowColumn>
                                <TableRowColumn>{row.status}</TableRowColumn>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        );
    }
}
