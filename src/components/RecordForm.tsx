/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { compose } from "redux";
import {
  Field,
  InjectedFormProps,
  reduxForm,
  WrappedFieldProps,
} from "redux-form";

import { AppState } from "../types";
import { showRecordForm } from "../redux/actions";

/*const validate = () => {

}*/
interface CustomFieldProps {
  type?: string;
  placeholder?: string;
  className: string;
}

const renderInput = ({
  input,
  type,
  placeholder,
  className,
  meta: { touched, error },
}: WrappedFieldProps & CustomFieldProps) => (
  <div>
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
  const open = useSelector((state: AppState) => state.ui.recFormOpen);
  const dispatch = useDispatch();

  const handleXClick = () => {
    dispatch(showRecordForm(false));
  };

  return open ? (
    <div className="overlay" style={{ display: "block" }}>
      <div className="form-wrapper">
        <div className="form-container">
          <h3 style={{ color: "darkgrey" }}>New Record</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-item">
              <label>Link to Image</label>
              <Field
                className="input"
                name="image"
                component={renderInput}
                type="text"
                placeholder="Image ..."
              />
            </div>
            <div className="form-item">
              <label>Title</label>
              <Field
                name="title"
                component={renderInput}
                type="text"
                placeholder="Title .."
              />
            </div>
            <div className="form-item">
              <label>Artist(s)</label>
              <Field
                name="artists"
                component={renderInput}
                type="text"
                placeholder="Add artists seperated by coma .."
              />
            </div>
            <div className="form-item">
              <label>Year Published</label>
              <Field
                name="year"
                component={renderInput}
                type="number"
                placeholder="Add year (YYYY) .."
              />
            </div>
            <div className="form-item">
              <label>Label</label>
              <Field
                name="label"
                component={renderInput}
                type="text"
                placeholder="Label .."
              />
            </div>
            <div className="form-item">
              <label>Genre(s)</label>
              <Field
                name="genres"
                component={renderInput}
                type="text"
                placeholder="Add genres seperated by coma .."
              />
            </div>
            <div>add tracks form</div>
            <div className="form-item">
              <label>Available</label>
              <Field name="available" component="checkbox" />
            </div>
            <div className="form-item">
              <label>Favorite</label>
              <Field name="favorite" component="checkbox" />
            </div>
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
                onClick={reset}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default compose(
  reduxForm({
    form: "add-form",
    //validate
  })(RecordForm)
);
