import * as _ from 'lodash'

import { Reducer } from 'redux'
import { BaseAction, IAction } from '../utils/actionHelpers'


export class ReducerBuilder<State> {

    actions: { [type: string]: Reducer<State> } = {};
    initState: State;


    public init(state: State) {
        this.initState = state;
        return this;
    }

    public action<T extends BaseAction>(actionType: IAction<T>, actionBody: (state: State, action?: T) => State) {
        this.actions[actionType.prototype.type] = actionBody;
        return this;
    }

    public build() {
        return (state: State, action: BaseAction) => {
            let type = action.type;
            let actionBody = this.actions[type];
            state = state || this.initState;

            if (!!actionBody) {
                return _.merge({}, state, actionBody(state, action));
            }

            return state;
        }
    }
}