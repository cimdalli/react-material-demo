import * as React from 'react';

export const Router: ClassDecorator = (target: any) => {
    target.contextTypes = target.contextTypes || {};
    target.contextTypes.router = React.PropTypes.func.isRequired;
}