import * as React from 'react'

import Navigation from '../components/navigation'

interface DashboardState {
  data?: any[]
}

export default class DashboardContainer extends React.Component<
  {},
  DashboardState
> {
  state = {
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
    ],
  }

  handleDataSelection = (index: number[]) => {
    this.setState({
      data: this.state.data.map((m: any, i: number) => {
        m.selected = index.indexOf(i) !== -1
        return m
      }),
    })
  }

  render() {
    console.log('Dashboard')

    var navigation = (
      <Navigation
        data={this.state.data}
        onRowSelection={this.handleDataSelection}
      />
    )

    return <div>{navigation}</div>
  }
}
