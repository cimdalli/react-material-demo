import * as React from 'react';


export default class AuthArea extends React.Component<any, any>{

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}