import { Action } from "redux";
import { StateChange } from "../entity/entities";

export type StateChangeAction = Action<"STATE_CHANGE"> & {change: StateChange};
export const stateChanged: (change:StateChange) => StateChangeAction = (change) => ({
    type: "STATE_CHANGE",
    change
});
