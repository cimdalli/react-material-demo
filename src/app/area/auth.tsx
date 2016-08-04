import * as React from 'react';
import { EnterHook } from 'react-router'


export default class AuthArea extends React.Component<any, any>{

    onEnter: EnterHook = (nextState, transition, callback) => {
        debugger;
        if (!!localStorage.getItem("auth")) {
            transition("login");
        }
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}