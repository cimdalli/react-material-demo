import * as React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import Paper from 'material-ui/Paper'
import Table from './table'

interface NavigationState {
  tab: string
}

interface NavigationProps {
  data: any
  onRowSelection: any
}

export default class Navigation extends React.Component<
  NavigationProps,
  NavigationState
> {
  state = {
    tab: 'merchant',
  }

  handleTabChange = (tab: string) => {
    //bugfix for disappering selected tab on selecting checkbox inside of tab
    if (typeof tab === 'string') {
      this.setState({
        tab: tab,
      })
    }
  }

  render() {
    return (
      <div>
        <Tabs value={this.state.tab} onChange={this.handleTabChange}>
          <Tab label="Merchant" value="merchant">
            <div>
              <h2>Merchant</h2>
              <Paper>
                <Table
                  data={this.props.data}
                  onRowSelection={this.props.onRowSelection}
                />
              </Paper>
            </div>
          </Tab>
          <Tab label="Reports" value="reports">
            <div>
              <h2>Reports</h2>
              <p>
                This is another example of a controllable tab.Remember, if you
                use controllable Tabs, you need to give all of your tabs values
                or else you wont be able to select them.
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>
    )
  }
}
