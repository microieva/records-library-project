/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useSelector } from "react-redux";
import { compose } from "redux";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

import { AppState } from "../types";
//import { addRecord } from "../redux/actions";

/*const validate = () => {

}*/

const RecordForm = ({
  pristine,
  submitting,
  reset,
  handleSubmit,
}: InjectedFormProps) => {
  const open = useSelector((state: AppState) => state.ui.recInputOpen);

  return open ? (
    <div className="overlay" style={{ display: "block" }}>
      <div className="form-wrapper">
        <div className="form-container">
          <h3>New Record</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Link to Image</label>
              <Field
                name="image"
                component="input"
                type="text"
                placeholder="Image ..."
              />
            </div>
            <div>
              <label>Title</label>
              <Field
                name="title"
                component="input"
                type="text"
                placeholder="Title .."
              />
            </div>
            <div>
              <label>Artist(s)</label>
              <Field
                name="artists"
                component="input"
                type="text"
                placeholder="Add artists seperated by coma .."
              />
            </div>
            <div>
              <label>Year Published</label>
              <Field
                name="year"
                component="input"
                type="number"
                placeholder="Add year (YYYY) .."
              />
            </div>
            <div>
              <label>Label</label>
              <Field
                name="label"
                component="input"
                type="text"
                placeholder="Label .."
              />
            </div>
            <div>
              <label>Genre(s)</label>
              <Field
                name="genres"
                component="input"
                type="text"
                placeholder="Add genres seperated by coma .."
              />
            </div>
            <div>add tracks form</div>
            <div>
              <label>Available</label>
              <Field name="available" component="checkbox" />
            </div>
            <div>
              <label>Favorite</label>
              <Field name="favorite" component="checkbox" />
            </div>
            <div className="btn-group">
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
          </form>
        </div>
      </div>
    </div>
  ) : null;
};

export default compose(
  reduxForm({
    form: "newRecord",
    //validate
  })(RecordForm)
);
