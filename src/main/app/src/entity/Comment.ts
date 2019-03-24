import AbstractEntity from "./AbstractEntity";

export default interface Comment extends AbstractEntity {
    content: string,
    note?: string
}