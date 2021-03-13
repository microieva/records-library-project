import React from "react";
import { useParams } from "react-router";
//import { useHistory } from "react-router-dom";

import { Record } from "../types";

import "../scss/record-page.scss";

type RecordPageProps = {
  records: Record[];
};

interface RouteParams {
  title: string;
}

const RecordPage = (props: RecordPageProps) => {
  const { records } = props;
  const { title } = useParams<RouteParams>();

  console.log("RECORD PAGE: ", records);
  let record = records.find((r) => r.title === title);
  //const history = useHistory()
  /*const handleClick =()=>{
    history.push("/");
  }*/
  console.log("RECORD: ", record);

  return (
    <div className="record-page-container">
      {record ? (
        <div className="flex--column">
          <div className="flex--row">
            <div>
              <img src={record.image} alt="record" />
            </div>
            <div>
              <h1>{record.title}</h1>
              <p>artist(s):</p>
              <h3>{record.authors.map((artist) => artist).join(", ")}</h3>
              <p>label:</p>
              <h3>
                {record.label}, {record.publishedYear}
              </h3>
              <p>genres:</p>
              <h3>{record.genres}</h3>
            </div>
          </div>
          <div className="tracks-div">
            {record.tracks.map((track) => (
              <p>{track.name}</p>
            ))}
          </div>
        </div>
      ) : (
        false
      )}
    </div>
  );
};

export default RecordPage;
