import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { reset } from "redux-form";
import { v4 as uuidv4 } from "uuid";

import RecordForm from "./RecordForm";
import { AppState } from "../types";
import { addRecord } from "../redux/actions";

const NewRecord = () => {
  const open = useSelector((state: AppState) => state.ui.recFormOpen);
  //const addRecordForm = useSelector((state:AppState) => state.form.addRecord);

  const dispatch = useDispatch();

  const handleSubmit = (values: any) => {
    const id = uuidv4();
    const newRecord = {
      _id: id,
      image: values.image,
      title: values.title,
      authors: values.authors,
      genres: values.genres,
      publishedYear: values.publishedYear,
      //tracks
      label: values.label,
      favorite: values.favorite,
      available: values.available,
    };
    console.log("SUBMIT VALUES: ", newRecord);
    dispatch(addRecord(newRecord));
    dispatch(reset("addRecord"));
  };

  return open ? <RecordForm onSubmit={handleSubmit} /> : null;
};

export default connect(null)(NewRecord);
