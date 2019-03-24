import React, { Component } from "react";
import "./create-board.scss";
import CreateBoardForm from "./create-board-form";

const CreateBoard = ({}) => (
  <div className="CreateBoard-box">
    <h1>MiniRetro</h1>
    <p>Start by creating a board for your retrospective meeting:</p>
    <CreateBoardForm />
  </div>
);
export default CreateBoard;
