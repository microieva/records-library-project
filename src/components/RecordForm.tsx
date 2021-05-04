/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useDispatch, connect } from "react-redux";
//import { compose } from "redux";
import {
  Field,
  InjectedFormProps,
  reduxForm,
  WrappedFieldProps,
  FormErrors,
} from "redux-form";

import { Record } from "../types";
import { showRecordForm } from "../redux/actions";

interface CustomFieldProps {
  type: string;
  placeholder?: string;
  className: string;
  label: string;
}

const renderField = ({
  input,
  type,
  placeholder,
  className,
  label,
  meta: { touched, error },
}: WrappedFieldProps & CustomFieldProps) => (
  <div className="form-item">
    <label>{label}</label>
    <input
      {...input}
      placeholder={placeholder}
      type={type}
      className={className}
    />
    {touched && error && <span>{error}</span>}
  </div>
);

const RecordForm = ({
  pristine,
  submitting,
  reset,
  handleSubmit,
}: InjectedFormProps) => {
  const dispatch = useDispatch();

  const handleXClick = () => {
    dispatch(showRecordForm(false));
  };

  return (
    <div className="overlay" style={{ display: "block" }}>
      <div className="form-wrapper">
        <div className="form-container">
          <h3 style={{ color: "darkgrey" }}>New Record</h3>
          <form onSubmit={handleSubmit}>
            <Field
              className="input"
              name="image"
              component={renderField}
              type="text"
              placeholder="Image ..."
              label="Link to Image"
              //{...image}
            />

            <Field
              className="input"
              name="title"
              component={renderField}
              type="text"
              placeholder="Title .."
              label="Title"
              //{...title}
            />

            <Field
              className="input"
              name="artists"
              component={renderField}
              type="text"
              placeholder="Add artists seperated by coma .."
              label="Artist(s)"
              //{...authors}
            />

            <Field
              className="input"
              name="year"
              component={renderField}
              type="text"
              placeholder="Add year (YYYY) .."
              label="Year Published"
              //{...publishedYear}
            />

            <Field
              className="input"
              name="label"
              component={renderField}
              type="text"
              placeholder="Label .."
              label="Label"
              //{...label}
            />

            <Field
              className="input"
              name="genres"
              component={renderField}
              type="text"
              placeholder="Add genres seperated by coma .."
              label="Genre(s)"
              //{...genres}
            />

            <div>add tracks form</div>

            <Field
              name="available"
              component={renderField}
              type="checkbox"
              label="Available"
              //{...available}
            />

            <Field
              name="favorite"
              component={renderField}
              type="checkbox"
              label="Favorite"
              //{...favorite}
            />
          </form>
          <div className="btn-group">
            <button
              style={{ alignSelf: "flex-start" }}
              className="btn btn-rmv"
              onClick={handleXClick}
            >
              x
            </button>
            <div className="btn-group btn-group--width">
              <button
                className="btn"
                type="submit"
                disabled={pristine || submitting}
              >
                Submit
              </button>
              <button
                className="btn"
                type="button"
                disabled={pristine || submitting}
                onClick={() => dispatch(reset)}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const validate = (values: Record): FormErrors<Record> => {
  const errors: FormErrors<Record> = {};

  if (!values.image) {
    errors.image = "Required field.";
  } else if (!values.title) {
    errors.title = "Required field.";
  }

  /*else if (values.publishedYear.trim()==="" || values.publishedYear.length < 4 ) {
    errors.publishedYear = "Required field. In YYYY format."
  }*/
  return errors;
};

// export default compose(
//   reduxForm<Record>({
//     form: "addRecord",

//     validate
//   })(RecordForm)
// );

const form = reduxForm<{}>({
  // destroyOnUnmount: false,
  // forceUnregisterOnUnmount: true,
  form: "addRecord",
  //touchOnChange: true,
  validate,
})(RecordForm);

export default connect(null)(form);
