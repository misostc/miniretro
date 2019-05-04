import { Action } from "redux";

export type OpenCommentsAction = Action<"OPEN_COMMENTS"> & {noteHref: string};
export const openComments: (noteHref:string) => OpenCommentsAction = (noteHref) => ({
    type: "OPEN_COMMENTS",
    noteHref: noteHref
});

export type OpenEditAction = Action<"OPEN_EDIT"> & {noteHref: string};
export const openEdit: (noteHref:string) => OpenEditAction = (noteHref) => ({
    type: "OPEN_EDIT",
    noteHref: noteHref
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

export type UIActions = OpenCommentsAction | OpenEditAction | OpenNewAction | CreateNoteTextChangeAction ;