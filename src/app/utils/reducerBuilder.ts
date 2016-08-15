import * as _ from 'lodash'

import { Reducer } from 'redux'
import { SyncAction, IAction } from '../utils/actionHelpers'


export class ReducerBuilder<State> {

    actions: { [type: string]: Reducer<State> } = {};
    initState: State;


    public init(state: State) {
        this.initState = state;
        return this;
    }

    public action<T extends SyncAction>(actionType: IAction<T>, actionBody: (state: State, action?: T) => State) {
        this.actions[actionType.prototype.type] = actionBody;
        return this;
    }

    public build() {
        return (state: State = this.initState, action: SyncAction) => {
            let type = action.type;
            let actionBody = this.actions[type];

            if (!!actionBody) {
                let nextState = actionBody(state, action);
                return _.merge({}, state, nextState);
            }

            return state;
        }
    }
}