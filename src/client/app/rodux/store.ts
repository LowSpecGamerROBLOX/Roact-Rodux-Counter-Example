import Rodux from "@rbxts/rodux";

// interface for the state
export interface countState {
    count: number;
}

const countReducer = Rodux.createReducer<countState, Rodux.Action<string>>(
    // the initial state
    {
        count: 0,
    },
    // action handlers
    {
        increment: (state: countState, action: Rodux.Action<string>) => {
            return {
                count: state.count + 1,
            };
        },
        decrement: (state: countState, action: Rodux.Action<string>) => {
            return {
                count: state.count - 1,
            };
        },
    },
);

export const store = new Rodux.Store(countReducer);
