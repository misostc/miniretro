import React, { Component } from "react";
import "./create-board-form.scss";
import {
  Formik,
  Field,
  Form,
  FormikActions,
  FormikErrors,
  ErrorMessage
} from "formik";
import { connect } from "react-redux";
import createBoard from "../actions/create-board";

export interface CreateBoardValues {
  name: string;
  template: string;
}

const validate = (values: CreateBoardValues) => {
  let errors: FormikErrors<CreateBoardValues> = {};

  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.template) {
    errors.template = "Required";
  } else if (!/^([^|]+ \| )*[^|]+$/i.test(values.template)) {
    errors.template = "Wrong format";
  }
  return errors;
};

type DispatchProps = {
  createBoard: (valus: CreateBoardValues) => void;
};

const CreateBoardForm: React.FC<DispatchProps> = ({ createBoard }) => (
  <Formik
    initialValues={{
      name: "",
      template: "Start | Continue | Stop"
    }}
    validate={validate}
    onSubmit={(
      values: CreateBoardValues,
      { setSubmitting }: FormikActions<CreateBoardValues>
    ) => {
      setTimeout(() => {
        createBoard(values);
        setSubmitting(false);
      }, 500);
    }}
    render={() => (
      <Form className="CreateBoard-form">
        <label htmlFor="name">Title</label>
        <Field id="name" name="name" placeholder="Title" type="text" />
        <ErrorMessage component="div" name="name" />

        <label htmlFor="template">
          Template <small>Use | to divide sections</small>
        </label>
        <Field id="template" name="template" type="text" />
        <ErrorMessage component="div" name="template" />

        <button type="submit">Submit</button>
      </Form>
    )}
  />
);

export default connect(
  undefined,
  { createBoard }
)(CreateBoardForm);
