import * as React from 'react';


export default class AuthArea extends React.Component<any, any>{

    constructor(props: any, state: any) {
        super(props, state);
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}