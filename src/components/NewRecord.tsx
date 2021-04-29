import React from "react";
import { connect, useSelector } from "react-redux";
import { reset } from "redux-form";

import RecordForm from "./RecordForm";
import { AppState } from "../types";
import { addRecord } from "../redux/actions";

const NewRecord = (props: any) => {
  const open = useSelector((state: AppState) => state.ui.recFormOpen);
  console.log("NEW REC props: ", props);
  //const dispatch = useDispatch()

  const handleSubmit = (values: any) => {
    console.log("SUBMIT VALUES: ", values);
    props.dispatch(addRecord(values));
    props.dispatch(reset("addRecord"));
  };

  return open ? <RecordForm onSubmit={handleSubmit} {...props} /> : null;
};

export default connect(null)(NewRecord);
