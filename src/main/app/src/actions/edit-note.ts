import { CloseAllAction, closeAll } from './ui-actions';
import { StateChangeAction, stateChanged } from './state-change';
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { State } from '../reducer/reducer';

export default (): ThunkAction<void, State, undefined, CloseAllAction> => (dispatch, getState) => {
    const {uiState} = getState();
    uiState.editNote && axios
      .patch(uiState.editNote.noteHref, {
        content: uiState.editNote.text
      })
      .then(response => {
        dispatch(closeAll());
      }); 
}