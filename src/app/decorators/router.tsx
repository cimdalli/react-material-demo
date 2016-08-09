import * as React from 'react';
import {} from 'react-router'

export const Router: ClassDecorator = (target: any) => {
    target.contextTypes = target.contextTypes || {};
    target.contextTypes.router = React.PropTypes.object.isRequired;
}

export interface IRouterContext {
    router?: HistoryModule.History
}