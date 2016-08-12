import * as _ from 'lodash'
import { Action, Middleware } from 'redux'


//http://www.bluewire-technologies.com/2015/redux-actions-for-typescript/
interface IAction<T extends Action> {
    prototype: T;
}

export abstract class BaseAction implements Action {
    type: string;
    constructor() {
        this.type = this.type;
    }

    // is<T extends Action>(actionClass: IAction<T>): this is T {
    //     return this.type == actionClass.prototype.type;
    // }
}

export function Action(name: string) {
    return function <T extends Action>(actionClass: IAction<T>) {
        actionClass.prototype.type = name;
    }
}

export const typedToPlainMiddleware: Middleware = (store: any) => (next: any) => (action: any) => {
    next(_.merge({}, action));
};