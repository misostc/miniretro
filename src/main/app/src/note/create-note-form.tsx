import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane as PaperPlane } from "@fortawesome/free-regular-svg-icons";
import "./create-note-form.scss";
import { State } from "../reducer/reducer";
import { connect } from "react-redux";
import { createNoteTextChange, CreateNoteTextChangeAction  } from "../actions/ui-actions";
import submitNote from "../actions/submit-note";

type DispatchProps = { onChange: (text:string) => CreateNoteTextChangeAction, onSubmit: () => void };
type OwnProps = { value: string };
type StateProps = {};

type Props = DispatchProps & OwnProps & StateProps;

const CreateNoteForm = ({value, onChange, onSubmit}: Props) => (
  <div className="CreateNoteForm">
    <textarea onChange={(e) => onChange(e.target.value)} value={value}/>
    <button title="Send" onClick={() => onSubmit()}>
      <FontAwesomeIcon icon={PaperPlane} />
    </button>
  </div>
);


export default connect(
    (state: State) => ({
        value: state.uiState.newNote && state.uiState.newNote.text || ''
    }),
    {onChange: createNoteTextChange, onSubmit: submitNote}
)(CreateNoteForm);