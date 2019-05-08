import { NoteVote } from "./entities";
export type Entity = {
  id: string;
  createdDate: string;
  selfLink: string;
};

export type Board = Entity & {
  name: string;
};

export type BoardColumn = Entity & {
  name: string;
  sortOrder: number;
  board: string;
};

export type Note = Entity & {
  content: string;
  boardColumn: string;
};

export type NoteVote = Entity & {
  userHash: string;
  note: string;
};

export type NoteComment = Entity & {
  content: string;
  note: string;
};

export type StateChange = {
  operationType: "UPDATE" | "CREATE" | "DELETE";
} & (
  | { resourceName: "Board"; resource: Board }
  | { resourceName: "BoardColumn"; resource: BoardColumn }
  | { resourceName: "Note"; resource: Note }
  | { resourceName: "Vote"; resource: NoteVote }
  | { resourceName: "Comment"; resource: NoteComment });
