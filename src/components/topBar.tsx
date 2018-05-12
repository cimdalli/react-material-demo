import * as React from 'react'

import Toggle from 'material-ui/Toggle'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'

import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import MenuItem from 'material-ui/MenuItem'
import DropDownMenu from 'material-ui/DropDownMenu'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle,
} from 'material-ui/Toolbar'

export interface TopBarProps {
  ChangeTheme: () => void
  Logout: () => void
  useDarkTheme: boolean
}

interface TopBarState {
  sideBarOpen: boolean
}

export class TopBar extends React.Component<TopBarProps, TopBarState> {
  state = {
    sideBarOpen: false,
  }

  toggleSideMenu = (open: boolean) => {
    this.setState({
      sideBarOpen: open,
    })
  }

  render() {
    const toolbar = (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu>
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
          <RaisedButton label="Create Broadcast" />
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
      </Toolbar>
    )

    const sideMenu = (
      <Drawer
        docked={false}
        width={300}
        open={this.state.sideBarOpen}
        onRequestChange={this.toggleSideMenu}
      >
        <MenuItem onClick={() => this.toggleSideMenu(false)}>
          Menu Item
        </MenuItem>
        <MenuItem onClick={() => this.toggleSideMenu(false)}>
          Menu Item 2
        </MenuItem>
      </Drawer>
    )

    const themeToggle = (
      <Toggle
        onToggle={this.props.ChangeTheme}
        label={'dark:' + this.props.useDarkTheme}
        toggled={this.props.useDarkTheme}
      />
    )

    const logoutButton = (
      <FlatButton onClick={this.props.Logout} label="logout" />
    )

    const appBarRightElement = (
      <div style={{ display: 'inline-block' }}>
        {themeToggle}
        {logoutButton}
      </div>
    )

    return (
      <div>
        {sideMenu}
        <AppBar
          iconElementRight={appBarRightElement}
          onLeftIconButtonClick={() => this.toggleSideMenu(true)}
          zDepth={0}
        />
        {toolbar}
        {themeToggle}
      </div>
    )
  }
}
