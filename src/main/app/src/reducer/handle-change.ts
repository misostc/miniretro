import {
  StateChange,
  OperationType,
  ResourceName
} from "../entity/StateChange";
import Board from "../entity/Board";
import AbstractEntity from "../entity/AbstractEntity";

const areSame = (a: AbstractEntity, b: AbstractEntity) =>
  a.id == b.id;

const hasID = (a: AbstractEntity, id: String | undefined) =>
  a.id && a.id === id;

function lowercaseFirstLetter(string: string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

const handleArray: <T extends AbstractEntity>(
  action: OperationType,
  array: T[],
  resource: T
) => T[] = (action, array, change) => {
  if (action === "CREATE") {
    return [...array, change];
  }
  if (action === "DELETE") {
    return array.filter(el => areSame(el, change));
  }
  if (action === "UPDATE") {
    return handleArray("CREATE", handleArray("DELETE", array, change), change);
  }
  return array;
};

const handleIChange: <P extends AbstractEntity, C extends AbstractEntity>(
  resourceName: ResourceName,
  parentResourceName: ResourceName,
  parent: P,
  change: StateChange,
  mappingFunc?: (a: AbstractEntity) => AbstractEntity
) => C[] = (resourceName, parentResourceName, parent, change, mappingFunc = a => a) => {
  const array = (parent as any)[lowercaseFirstLetter(resourceName) + "s"] || [];
  return resourceName === change.resourceName &&
    hasID(parent, (change.resource as any)[lowercaseFirstLetter(parentResourceName)    ])
    ? handleArray(change.operationType, array, {...change.resource, _links: {
        self: {
            href: change.links[0].href
        }
    }})
    : array.map(mappingFunc);
};

export const handleChange: (
  board: Board,
  change: StateChange
) => Board | null = (board, change) => {
  if (change.resourceName === "Board") {
    if (change.operationType === "UPDATE") {
      return {...board, ...change.resource};
    }
    if (change.operationType === "DELETE") {
      return null;
    }
  }

  return {
    ...board,
    boardColumns: handleIChange("BoardColumn", "Board", board, change, bc => ({
      ...bc,
      notes: handleIChange("Note", "BoardColumn", bc, change, note => ({
        ...note,
        votes: handleIChange("Vote", "Note", note, change),
        comments: handleIChange("Comment", "Note", note, change)
      }))
    }))
  };
};
