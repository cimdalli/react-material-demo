import * as React from "react"
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


interface MpTableProps extends __MaterialUI.Table.TableProps {
    data: any[];
}

export default class MpTable extends React.Component<MpTableProps, any> {
    constructor() {
        super();
    }

    render() {
        return (
            <Table
                selectable={true}
                multiSelectable={true}
                onRowSelection={this.props.onRowSelection}
                >
                <TableHeader>
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
                    showRowHover={true}
                    deselectOnClickaway={false}
                    >
                    {
                        this.props.data.map((row: any, index: any) => (
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
