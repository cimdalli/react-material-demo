import * as React from "react";
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import MpTable from "./mpTable"


interface NavigationState {
    tab?: string
}

export default class Navigation extends React.Component<any, NavigationState>{
    constructor(props: any, state: NavigationState) {
        super(props, state);

        this.state = {
            tab: "merchant",

        };

        this.handleTabChange = this.handleTabChange.bind(this);
    }

    handleTabChange(tab: string) {
        //bugfix for disappering selected tab on selecting checkbox inside of tab
        if (typeof tab === "string") {
            this.setState({
                tab: tab
            });
        }
    }

    render() {
        return (
            <div>
                <Tabs
                    value={this.state.tab}
                    onChange={this.handleTabChange}
                    >
                    <Tab
                        label="Mağazalar"
                        value="merchant"
                        >
                        <div>
                            <h2>Mağazalar</h2>
                            <Paper>
                                <MpTable
                                    data={this.props.data}
                                    onRowSelection={this.props.onRowSelection}
                                    />
                            </Paper>
                        </div>
                    </Tab>
                    <Tab
                        label="Raporlar"
                        value="reports"
                        >
                        <div>
                            <h2>Raporlar</h2>
                            <p>
                                This is another example of a controllable tab.Remember, if you
                                use controllable Tabs, you need to give all of your tabs values or else
                                you wont be able to select them.
                            </p>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}