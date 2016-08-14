import * as _ from 'lodash'
import { Action, Middleware } from 'redux'


//http://www.bluewire-technologies.com/2015/redux-actions-for-typescript/
export interface IAction<T extends Action> {
    prototype: T;
}

export abstract class BaseAction implements Action {
    type: string;
    constructor() {
        this.type = this.type;
    }
}

export function Action(name: string) {
    return function <T extends Action>(actionClass: IAction<T>) {
        actionClass.prototype.type = name;
    }
}

// export function isType<T extends Action>(action: Action, actionClass: IAction<T>): action is T {
//     return action.type == actionClass.prototype.type;
// }

// export function getType<T extends Action>(action: Action): action is T {
//     return action.type;
// }

export const typedToPlainMiddleware: Middleware = (store: any) => (next: any) => (action: any) => {
    next(_.merge({}, action));
};