import AbstractEntity from "./AbstractEntity";
import Note from "./Note";

 export default interface BoardColumn extends AbstractEntity {
     name: string,
     sortOrder: number,
     board?: string,
     notes?: Note[]
 }