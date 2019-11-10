import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt as TrashOutline } from "@fortawesome/free-regular-svg-icons";
import deleteNote from "../actions/delete-note";
import { connect } from "react-redux";

type DispatchProps = {deleteNote: (noteHref:string) => void};
type OwnProps = {noteHref: string, noteText:string}
type Props = OwnProps & DispatchProps;

const DeleteButton: React.FC<Props> = props => {
  return <button title="Delete" onClick={() => props.deleteNote(props.noteHref)}>
        <FontAwesomeIcon icon={TrashOutline} />
      </button>;
};

export default connect(undefined, {deleteNote})(DeleteButton)
