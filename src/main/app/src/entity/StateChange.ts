import AbstractEntity from "./AbstractEntity";
import BoardColumn from "./BoardColumn";
import Board from "./Board";
import Comment from "./Comment";
import Note from "./Note";
import Vote from "./Vote";

export type OperationType = "CREATE" | "UPDATE" | "DELETE";
export type ResourceName =
  | "Board"
  | "BoardColumn"
  | "Comment"
  | "Note"
  | "Vote";

type ResourceLink = {
  rel: "resourceLink";
  href: string;
};

type StateChangeT<T extends AbstractEntity, N extends ResourceName> = {
  operationType: OperationType;
  resource: T;
  resourceName: N;
  links: ResourceLink[];
};

export type StateChange =
  | StateChangeT<Board, "Board">
  | StateChangeT<BoardColumn, "BoardColumn">
  | StateChangeT<Comment, "Comment">
  | StateChangeT<Note, "Note">
  | StateChangeT<Vote, "Vote">;
