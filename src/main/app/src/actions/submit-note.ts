import { StateChangeAction, stateChanged } from './state-change';
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { State } from '../reducer/reducer';
import { closeAll, CloseAllAction } from './ui-actions';

export default (): ThunkAction<void, State, undefined, CloseAllAction> => (dispatch, getState) => {
    const {uiState} = getState();
    uiState.newNote && axios
      .post("/notes", {
        content: uiState.newNote.text,
        boardColumn: uiState.newNote.boardColumnHref
      })
      .then(response => {
        dispatch(closeAll());        
      }); 
}