import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit as EditOutline } from "@fortawesome/free-regular-svg-icons";
import { OpenEditAction, openEdit } from "../actions/ui-actions";
import { connect } from "react-redux";

type DispatchProps = {openEdit: (noteHref:string, noteText:string) => OpenEditAction};
type OwnProps = {noteHref: string, noteText:string}
type Props = OwnProps & DispatchProps;

const EditButton: React.FC<Props> = props => {
  return <button title="Comment" onClick={() => props.openEdit(props.noteHref, props.noteText)}>
        <FontAwesomeIcon icon={EditOutline} />
      </button>;
};

export default connect(undefined, {openEdit})(EditButton)
