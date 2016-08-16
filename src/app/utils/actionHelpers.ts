// import * as _ from 'lodash'
// import { Middleware, MiddlewareAPI, Dispatch } from 'redux'


//http://www.bluewire-technologies.com/2015/redux-actions-for-typescript/
// export interface IAction<T extends Redux.Action> {
//     prototype: T;
// }

// export abstract class SyncAction implements Redux.Action {
//     type: string;
//     constructor() {
//         this.type = this.type;
//     }
// }

// export abstract class AsyncAction extends SyncAction implements Promise<Dispatch<any>> {
//     async: boolean = true;
//     resolve: (value?: Dispatch<any>) => void;
//     reject: (reason?: any) => void;
//     promise: Promise<Dispatch<any>> = new Promise<Dispatch<any>>((resolve, reject) => {
//         this.resolve = resolve;
//         this.reject = reject;
//     });

//     then(onfulfilled?: (value: Dispatch<any>) => Dispatch<any> | PromiseLike<Dispatch<any>>,
//         onrejected?: (reason: any) => void): Promise<Dispatch<any>> {
//         return this.promise.then(onfulfilled, onrejected);
//     }

//     catch(onrejected?: (reason: any) => Dispatch<any> | PromiseLike<Dispatch<any>>): Promise<Dispatch<any>> {
//         return this.promise.then(onrejected);
//     }
// }

// export function Action(name: string) {
//     return function <T extends Redux.Action>(actionClass: IAction<T>) {
//         actionClass.prototype.type = name;
//     }
// }


// @Action("SHOW_LOADING")
// export class ShowLoading extends SyncAction { }


// @Action("HIDE_LOADING")
// export class HideLoading extends SyncAction { }


// export function isType<T extends Action>(action: Action, actionClass: IAction<T>): action is T {
//     return action.type == actionClass.prototype.type;
// }

// export function getType<T extends Action>(action: Action): action is T {
//     return action.type;
// }

// export const typedToPlainMiddleware: Middleware =
//     <S>(store: MiddlewareAPI<S>) => (next: Dispatch<S>): Dispatch<S> => (action: any) => {
//         if (typeof action === "object") {
//             action = _.merge({}, action);
//         }
//         return next(action);
//     };

// export const asyncMiddleware: Middleware =
//     <S>(store: MiddlewareAPI<S>) => (next: Dispatch<S>): Dispatch<S> => (action: any) => {
//         if (!!action.async) {
//             setTimeout(() => {
//                 store.dispatch(new ShowLoading());
//             });
//             setTimeout(() => {
//                 (action as AsyncAction).resolve(store.dispatch);
//             });
//             setTimeout(() => {
//                 store.dispatch(new HideLoading());
//             });
//         }
//         return next(action);
//     };

export const Action: PropertyDecorator = (type: string) => {
    return (target: SyncAction) => {
        target.type = type;
    }
}

export interface SyncAction {
    type?: string;
}