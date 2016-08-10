import * as React from 'react';
import { Router, IRouterContext } from '../../../decorators/router'

import { connect } from 'react-redux'
import { Dispatch, Action } from "redux";
import { changeTheme } from '../../../actions/root'

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
import FlatButton  from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';


interface MainState {
    sideBarOpen?: boolean
    value?: any
}

function mapStateToProps(state: any) {
    return {
        useDarkTheme: state.root.useDarkTheme
    };
}

interface MainProps {
    dispatch: Dispatch<any>;
    useDarkTheme: boolean;
}

@Router
class Main extends React.Component<MainProps, MainState> {

    constructor() {
        super();

        this.state = {
            sideBarOpen: false
        }

        this.handleToggleSideMenu = this.handleToggleSideMenu.bind(this);
        this.logout = this.logout.bind(this);
    }

    context: IRouterContext;

    handleToggleSideMenu(open: boolean) {
        this.setState({
            sideBarOpen: open
        });
    }

    logout() {
        localStorage.removeItem("auth");
        this.context.router.push("dashboard");
    }

    render() {
        var toolbar =
            <Toolbar>
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

        var sideMenu =
            <Drawer
                docked={false}
                width={300}
                open={this.state.sideBarOpen}
                onRequestChange={this.handleToggleSideMenu}
                >
                <MenuItem onTouchTap={() => this.handleToggleSideMenu(false) }>Menu Item</MenuItem>
                <MenuItem onTouchTap={() => this.handleToggleSideMenu(false) }>Menu Item 2</MenuItem>
            </Drawer>

        var swithTheme =
            <Toggle
                onToggle={() => { this.props.dispatch(changeTheme()) } }
                label={"dark:" + this.props.useDarkTheme}
                toggled={this.props.useDarkTheme}
                />;

        var logoutButton =
            <FlatButton
                onClick={this.logout}
                label="logout"
                />

        var appBarRightElement =
            <div style={{ display: "inline-block" }}>
                {swithTheme}
                {logoutButton}
            </div>

        // var childProps = {
        //     this.props.children && React.cloneElement(this.props.children, {
        //         onToggleTheme: this.handleToggleTheme
        //     })
        // };

        return (
            <div>
                {sideMenu}
                <AppBar iconElementRight={appBarRightElement} onLeftIconButtonTouchTap={() => this.handleToggleSideMenu(true) } zDepth={0}/>
                {toolbar}
                {swithTheme}
                {this.props.children}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Main)