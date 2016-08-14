
interface Todo {
    text: string;
}

enum ActionType {
    ADD
}

interface Action {
    type: ActionType;
    text: string;
}

export default function todos(state: Todo[] = [], action: Action): Todo[] {
    switch (action.type) {
        case ActionType.ADD:
            let text: Todo = {
                text: action.text
            };
            return [...state, text];
        default:
            return state;
    }
}

export function test() {
    let actions: Action[] = [
        {
            type: ActionType.ADD,
            text: "okan"
        },
        {
            type: ActionType.ADD,
            text: "kalp"
        },
        {
            type: ActionType.ADD,
            text: "ege su"
        }
    ];

    var result = actions.reduce(todos, []);
    console.log(result);
}