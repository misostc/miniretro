import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { faPlus as Plus} from "@fortawesome/free-solid-svg-icons";

import "./create-note.scss";
import { openNew, OpenNewAction } from "../actions/ui-actions";
 
type DispatchProps = { openNew: (boardColumnId:string) => OpenNewAction };
type OwnProps = { boardColumnHref: string };
type StateProps = {};

type Props = DispatchProps & OwnProps & StateProps;

const CreateNote: React.FC<Props> = ({ boardColumnHref, openNew }) => {
  return (
    <div className="CreateNote" title="Create new" onClick={(e) => openNew(boardColumnHref)}>
        <FontAwesomeIcon icon={Plus} />
    </div>
  );
};

export default connect(
  undefined,
  {openNew}
)(CreateNote);
