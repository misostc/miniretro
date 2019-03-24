import AbstractEntity from "./AbstractEntity";
import Comment from "./Comment";
import Vote from "./Vote";

export default interface Note extends AbstractEntity {
    content: string,
    boardColumn?: string,
    comments?: Comment[],
    votes?: Vote[],
    editing?: boolean,
    showComments?: boolean
}