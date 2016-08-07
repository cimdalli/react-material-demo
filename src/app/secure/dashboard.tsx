import * as React from 'react';
import * as _ from "lodash";

import Toggle from 'material-ui/Toggle';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import Navigation from "./navigation"

interface DashboardState {
    sideBarOpen?: boolean
    useDarkTheme?: boolean
    data?: any[]
    value?: any
}

export default class Dashboard extends React.Component<any, DashboardState> {
    constructor(props: any, state: DashboardState) {
        super(props, state);
         
        this.state = {
            useDarkTheme: false,
            sideBarOpen: false,
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

        this.handleDataSelection = this.handleDataSelection.bind(this);
        this.handleSideMenuToggle = this.handleSideMenuToggle.bind(this);
    }



    handleDataSelection(index: number[]) {
        this.setState({
            data: _.map(this.state.data, (m: any, i: number) => {
                m.selected = index.indexOf(i) !== -1;
                return m;
            })
        });
    }

    handleSideMenuToggle(open: boolean) {
        this.setState({
            sideBarOpen: open
        });
    }

    render() {

        var toolbar = <Toolbar>
            <ToolbarGroup firstChild={true}>
                <DropDownMenu value={this.state.value}>
                    <MenuItem value={1} primaryText="All Broadcasts" />
                    <MenuItem value={2} primaryText="All Voice" />
                    <MenuItem value={3} primaryText="All Text" />
                    <MenuItem value={4} primaryText="Complete Voice" />
                    <MenuItem value={5} primaryText="Complete Text" />
                    <MenuItem value={6} primaryText="Active Voice" />
                    <MenuItem value={7} primaryText="Active Text" />
                </DropDownMenu>
            </ToolbarGroup>
            <ToolbarGroup>
                <ToolbarTitle text="Options" />
                <FontIcon className="muidocs-icon-custom-sort" />
                <ToolbarSeparator />
                <RaisedButton label="Create Broadcast"  />
                <IconMenu
                    iconButtonElement={
                        <IconButton touch={true}>
                            <NavigationExpandMoreIcon />
                        </IconButton>
                    }
                    >
                    <MenuItem primaryText="Download" />
                    <MenuItem primaryText="More Info" />
                </IconMenu>
            </ToolbarGroup>
        </Toolbar>;

        var sideMenu = <Drawer
            docked={false}
            width={300}
            open={this.state.sideBarOpen}
            onRequestChange={this.handleSideMenuToggle}
            >
            <MenuItem onTouchTap={() => this.handleSideMenuToggle(false) }>Menu Item</MenuItem>
            <MenuItem onTouchTap={() => this.handleSideMenuToggle(false) }>Menu Item 2</MenuItem>
        </Drawer>

        var swithTheme =
            <Toggle
                onToggle={this.props.toggleTheme}
                label={"dark:" + this.state.useDarkTheme}
                toggled={!this.state.useDarkTheme}
                />;
        return (
            <div>
                {sideMenu}
                <AppBar iconElementRight={swithTheme} onLeftIconButtonTouchTap={() => this.handleSideMenuToggle(true) } zDepth={0}/>
                {toolbar}
                <Navigation data={this.state.data} onRowSelection={this.handleDataSelection}/>
                {swithTheme}
            </div>
        );
    }
}