import { State } from "./board-reducer";
import { StateChange, Entity } from "../entity/entities";

const handleArrayChange: <T extends Entity> (elArr: T[], op: "UPDATE" | "CREATE" | "DELETE", el: T) => T[] = (elArr, op, el) =>
{
    if (op === "CREATE" || op === "UPDATE") {
        return [...elArr.filter(e => e.id !== el.id), el];
    }
    if (op === "DELETE") {
        return elArr.filter(e => e.id !== el.id);
    }
    return elArr;
}

export const handleChange: (state: State, change: StateChange) => State = (state, change) => {
    if (change.resourceName === "Board") {
        return {...state, board: change.resource};
    }
    if (change.resourceName === 'BoardColumn') {
        return {...state, boardColumns: handleArrayChange(state.boardColumns, change.operationType, change.resource)}
    }
    if (change.resourceName === 'Note') {
        return {...state, notes: handleArrayChange(state.notes, change.operationType, change.resource)}
    }
    if (change.resourceName === 'Vote') {
        return {...state, votes: handleArrayChange(state.votes, change.operationType, change.resource)}
    }
    if (change.resourceName === 'Comment') {
        return {...state, comments: handleArrayChange(state.comments, change.operationType, change.resource)}
    }
    return state;
}