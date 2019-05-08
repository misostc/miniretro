import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane as PaperPlane } from "@fortawesome/free-regular-svg-icons";
import "./edit-note-form.scss";
import { State } from "../reducer/reducer";
import { connect } from "react-redux";
import { editNoteTextChange, EditNoteTextChangeAction  } from "../actions/ui-actions";
import editNote from "../actions/edit-note";

type DispatchProps = { onChange: (text:string) => EditNoteTextChangeAction, onSubmit: () => void };
type OwnProps = { value: string };
type StateProps = {};

type Props = DispatchProps & OwnProps & StateProps;

const EditNoteForm = ({value, onChange, onSubmit}: Props) => (
  <div className="EditNoteForm">
    <textarea onChange={(e) => onChange(e.target.value)} value={value}/>
    <button title="Send" onClick={() => onSubmit()}>
      <FontAwesomeIcon icon={PaperPlane} />
    </button>
  </div>
);


export default connect(
    (state: State) => ({
        value: state.uiState.editNote && state.uiState.editNote.text || ''
    }),
    {onChange: editNoteTextChange, onSubmit: editNote}
)(EditNoteForm);