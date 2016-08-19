import * as _ from 'lodash'
import { Middleware, MiddlewareAPI, Dispatch } from 'redux'


//http://www.bluewire-technologies.com/2015/redux-actions-for-typescript/
export interface IAction<T extends Redux.Action> {
    prototype: T;
}

export abstract class SyncAction implements Redux.Action {
    type: string;
    constructor() {
        this.type = this.type;
    }
}

type NullableDispatch = Dispatch<any> | void;

export abstract class AsyncAction extends SyncAction implements Promise<NullableDispatch> {
    async: boolean = true;
    resolve: (value?: Dispatch<any>) => void;
    reject: (reason?: any) => void;
    promise: Promise<Dispatch<any>> = new Promise<Dispatch<any>>((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
    });

    then(onfulfilled?: (value: Dispatch<any>) => NullableDispatch | PromiseLike<NullableDispatch>, onrejected?: (reason: any) => void): Promise<NullableDispatch> {
        return this.promise.then(onfulfilled, onrejected);
    }

    catch(onrejected?: (reason: any) => NullableDispatch | PromiseLike<NullableDispatch>): Promise<NullableDispatch> {
        return this.promise.catch(onrejected);
    }
}

export function Action<T extends SyncAction>(actionClass: IAction<T>) {
    actionClass.prototype.type = actionClass.toString().match(/\w+/g)[1];;
}


@Action
export class ShowLoading extends SyncAction { }


@Action
export class HideLoading extends SyncAction { }


export const typedToPlainMiddleware: Middleware =
    <S>(store: MiddlewareAPI<S>) => (next: Dispatch<S>): Dispatch<S> => (action: any) => {
        if (typeof action === "object") {
            action = _.merge({}, action);
        }
        return next(action);
    };

export const asyncMiddleware: Middleware =
    <S>(store: MiddlewareAPI<S>) => (next: Dispatch<S>): Dispatch<S> => (action: any) => {
        if (!!action.async) {
            setTimeout(() => {
                store.dispatch(new ShowLoading());
            });
            setTimeout(() => {
                (action as AsyncAction).resolve(store.dispatch);
            });
            setTimeout(() => {
                store.dispatch(new HideLoading());
            });
        }
        return next(action);
    };