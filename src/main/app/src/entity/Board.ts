import AbstractEntity from "./AbstractEntity";
import BoardColumn from "./BoardColumn";

export default interface Board extends AbstractEntity {
    name: string,
    boardColumns?: BoardColumn[]
}