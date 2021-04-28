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

/*const submit = (
  formValues: 
    {
      _id:string,
      image:string,
      title:string,
      authors:string[],
      genres:string[],
      label:string,
      publishedYear:number,
      available:boolean,
      favorite:boolean,
      tracks:[{
        name:string,
        sampleUrl:string,
        duration:number
      }]
    }
) => {
  console.log('SUBMIT CLICK');
  
  dispatch(addRecord(formValues))
}*/

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

  //const record = {}
  return open ? (
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
                //onClick={submit}
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
  ) : null;
};

//a wrapping component for onSubmit => handler with dispatch action

/*const Form =() => {
  const dispatch = useDispatch()

  const submit= (
    formValues: 
      {
        _id:string,
        image:string,
        title:string,
        authors:string[],
        genres:string[],
        label:string,
        publishedYear:number,
        available:boolean,
        favorite:boolean,
        tracks:[{
          name:string,
          sampleUrl:string,
          duration:number
        }]
      }
  ) => {
    console.log('SUBMIT CLICK');
    dispatch(addRecord(formValues))
  }
  return (
    <RecordForm 
      onSubmit={submit}/>
  )
}*/

export default compose(
  reduxForm({
    form: "addRecord",

    //validate
  })(RecordForm)
);
