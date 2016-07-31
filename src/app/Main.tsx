import * as React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { muiTheme } from "./mpTheme"

import AppBar from 'material-ui/AppBar';
import Toggle from 'material-ui/Toggle';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import Navigation from "./navigation"

export default class Main extends React.Component<any, any> {
  constructor(props: any, state: any) {
    super(props, state);

    this.toggleTheme = this.toggleTheme.bind(this);

    this.state = {
      useDarkTheme: false
    };
  }

  toggleTheme() {
    this.setState({
      useDarkTheme: !this.state.useDarkTheme
    });
  }

  render() {
    var swithTheme =
      <Toggle
        onToggle={this.toggleTheme}
        label={"dark:" + this.state.useDarkTheme}
        toggled={this.state.useDarkTheme}
        />;

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

    return (
      <MuiThemeProvider muiTheme= { muiTheme(this.state.useDarkTheme) } >
        <div>
          <AppBar iconElementRight={swithTheme} zDepth={0}/>
          <Navigation />
          {swithTheme}
        </div>
      </MuiThemeProvider >
    );
  }
}