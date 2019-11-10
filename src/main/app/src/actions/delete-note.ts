import { CloseAllAction, closeAll } from './ui-actions';
import { StateChangeAction, stateChanged } from './state-change';
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { State } from '../reducer/reducer';

export default (noteHref: string): ThunkAction<void, State, undefined, CloseAllAction> => (dispatch, getState) => {
    noteHref && window.confirm("Are you sure to delete?") && axios
      .delete(noteHref)
      .then(response => {
        dispatch(closeAll());
      }); 
}