import { AnyAction } from 'redux';
import uuidv4 from "uuid/v4";

export type State = {
  userHash: string;
};

const USER_HASH_KEY = "USER_HASH_KEY";
  
const generateUserHash = () => {
  let hash = localStorage.getItem(USER_HASH_KEY);
  if (!hash) {
    localStorage.setItem(USER_HASH_KEY, uuidv4());
    hash = localStorage.getItem(USER_HASH_KEY);
  }
  if (!hash) {
    return uuidv4();
  }
  return hash;
}

export default (initialState: State = {userHash: generateUserHash()}, action: AnyAction) => {
  return initialState;
};
