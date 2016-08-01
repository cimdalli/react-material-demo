import * as React from 'react';
import * as _ from "lodash";

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

    this.state = {
      useDarkTheme: false,
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

    this.toggleTheme = this.toggleTheme.bind(this);
    this.handleDataSelection = this.handleDataSelection.bind(this);
  }

  toggleTheme() {
    this.setState({
      useDarkTheme: !this.state.useDarkTheme
    });
  }

  handleDataSelection(index: number[]) {
    this.setState({
      data: _.map(this.state.data, (m: any, i: number) => {
        m.selected = index.indexOf(i) !== -1;
        return m;
      })
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
          <Navigation data={this.state.data} onRowSelection={this.handleDataSelection}/>
          {swithTheme}
        </div>
      </MuiThemeProvider >
    );
  }
}