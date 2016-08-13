import * as React from 'react';
import * as _ from "lodash";

import Navigation from '../components/navigation'

interface DashboardProps {
}

interface DashboardState {
    data?: any[]
}

export default class Dashboard extends React.Component<DashboardProps, DashboardState> {
    constructor() {
        super();

        this.state = {
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
        var navigation = <Navigation data={this.state.data} onRowSelection={this.handleDataSelection}/>

        return (
            <div>
                {navigation}
            </div>
        );

    }
}