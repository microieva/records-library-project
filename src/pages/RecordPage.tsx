import React from "react";
//import { useParams } from 'react-router';
//import { useHistory } from "react-router-dom";

import { Record } from "../types";

import "../scss/record-page.scss";

type RecordPageProps = {
  records: Record[];
};

const RecordPage = (props: RecordPageProps) => {
  const { records } = props;
  //const { title } = useParams()

  //let record = records.find(r => r.title === title)
  console.log("RECORD PAGE: ", records);
  //const history = useHistory()
  /*const handleClick =()=>{
    history.push("/");
  }*/

  return <div>record page</div>;
};

export default RecordPage;
