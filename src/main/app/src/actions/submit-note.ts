import { StateChangeAction, stateChanged } from './state-change';
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { State } from '../reducer/reducer';
import Note from '../entity/Note';

export default (): ThunkAction<void, State, undefined, StateChangeAction> => (dispatch, getState) => {
    const {uiState} = getState();
    uiState.newNote && axios
      .post("/notes", <Note>{
        content: uiState.newNote.text,
        boardColumn: uiState.newNote.boardColumnHref
      })
      .then(response => {
        
      }); 
}