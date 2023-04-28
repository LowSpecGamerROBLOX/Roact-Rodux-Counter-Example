import Rodux, { Action } from "@rbxts/rodux";

// interfae for the state
export interface countState {
    count: number;
}

const countReducer = Rodux.createReducer<countState, Action<string>>(
    // the initial state
    {
        count: 0,
    },
    // action handlers
    {
        increment: (state: countState, action: Action<string>) => {
            print("incrementing");
            return {
                count: state.count + 1,
            };
        },
        decrement: (state: countState, action: Action<string>) => {
            print("decrementing");
            return {
                count: state.count - 1,
            };
        },
    },
);

export const store = new Rodux.Store(countReducer);
