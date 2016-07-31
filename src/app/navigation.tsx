import * as React from "react";
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import {mpColor} from "./mpTheme"
import MpTable from "./mpTable"

interface NavigationState {
    tab: string
}

const inkStyle: React.CSSProperties = {
    // backgroundColor: mpColor
};

const tabLabelStyle: React.CSSProperties = {
    // backgroundColor: "#fff",
    // color: "#000"
}

export default class Navigation extends React.Component<any, NavigationState>{
    constructor(props: any, state: NavigationState) {
        super(props, state);

        this.handleTabChange = this.handleTabChange.bind(this);

        this.state = {
            tab: "merchant"
        };
    }

    handleTabChange(tab: string) {
        this.setState({
            tab: tab
        });
    }

    render() {
        return (
            <div>
                <Tabs
                    value={this.state.tab}
                    onChange={this.handleTabChange}
                    inkBarStyle={inkStyle}
                    tabItemContainerStyle={tabLabelStyle}
                    >
                    <Tab label="Mağazalar" value="merchant" >
                        <div>
                            <h2>Mağazalar</h2>

                        </div>
                    </Tab>
                    <Tab label="Raporlar" value="reports">
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
                <Paper>
                    <MpTable />
                </Paper>
            </div>
        );
    }
}