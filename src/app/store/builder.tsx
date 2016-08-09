import {
    Store,
    Reducer,
    ReducersMapObject,
    Middleware,
    combineReducers,
    createStore,
    applyMiddleware,
    compose } from 'redux';

export class StoreBuilder {

    private middlewares: Middleware[];
    private reducers: ReducersMapObject;
    private initialState: any;

    constructor() {
        this.middlewares = [];
        this.reducers = {};
        this.initialState = {};
    }

    public withMiddleware(middleware: Middleware) {
        this.middlewares.push(middleware);
        return this;
    }

    public withInitialState<S>(state: S) {
        this.initialState = state;
        return this;
    }

    public withReducer<S>(name: string, reducer: Reducer<S>) {
        this.reducers[name] = reducer;
        return this;
    }

    public build() {
        let middlewares = applyMiddleware(...this.middlewares);
        let reducers = combineReducers(this.reducers);
        let composer = compose(middlewares)(createStore);
        let store = composer(reducers, this.initialState);

        return store;
    }
}