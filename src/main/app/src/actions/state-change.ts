import { StateChange } from './../entity/StateChange';
import { Action } from "redux";

export type StateChangeAction = Action<"STATE_CHANGE"> & {change: StateChange};
export const stateChanged: (change:StateChange) => StateChangeAction = (change) => ({
    type: "STATE_CHANGE",
    change
});
