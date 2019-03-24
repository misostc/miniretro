import AbstractEntity from "./AbstractEntity";

export default interface Vote extends AbstractEntity {
    userHash: string,
    note?: string,
}