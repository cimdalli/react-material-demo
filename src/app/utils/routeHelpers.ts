import * as React from 'react';

import { RouterState } from 'react-router'


function normalizeUrl(url: string) {
    if (url && url[0] !== "/") {
        return "/" + url;
    }
    return url;
}

export function authChecker(loginPath: string, authenticatedPath: string, storageKey: string) {

    loginPath = normalizeUrl(loginPath);
    authenticatedPath = normalizeUrl(authenticatedPath);

    return (prevState: RouterState, nextState: RouterState, replace: any, callback?: Function) => {

        let isAuth = !!localStorage.getItem(storageKey);

        if (isAuth) {
            if (nextState.location.pathname == loginPath) {
                replace(authenticatedPath);
            }
        }
        else if (nextState.location.pathname != loginPath) {
            replace(loginPath);
        }
        callback();
    }
}