import { Action } from "redux";

export type OpenCommentsAction = Action<"OPEN_COMMENTS"> & {noteHref: string};
export const openComments: (noteHref:string) => OpenCommentsAction = (noteHref) => ({
    type: "OPEN_COMMENTS",
    noteHref: noteHref
});

export type OpenEditAction = Action<"OPEN_EDIT"> & {noteHref: string; noteText: string};
export const openEdit: (noteHref:string, noteText:string) => OpenEditAction = (noteHref, noteText) => ({
    type: "OPEN_EDIT",
    noteHref,
    noteText
});

export type OpenNewAction = Action<"OPEN_NEW"> & {boardColumnHref: string};
export const openNew: (boardColumnHref:string) => OpenNewAction = (boardColumnHref) => ({
    type: "OPEN_NEW",
    boardColumnHref: boardColumnHref
});

export type CreateNoteTextChangeAction = Action<"NEW_NOTE_TEXT"> & {text: string};
export const createNoteTextChange: (text:string) => CreateNoteTextChangeAction = (text) => ({
    type: "NEW_NOTE_TEXT",
    text
});

export type EditNoteTextChangeAction = Action<"EDIT_NOTE_TEXT"> & {text: string};
export const editNoteTextChange: (text:string) => EditNoteTextChangeAction = (text) => ({
    type: "EDIT_NOTE_TEXT",
    text
});

export type CloseAllAction = Action<"CLOSE_ALL">;
export const closeAll: () => CloseAllAction = () => ({
    type: "CLOSE_ALL"
});

export type UIActions = OpenCommentsAction | OpenEditAction | OpenNewAction | CreateNoteTextChangeAction | EditNoteTextChangeAction | CloseAllAction;