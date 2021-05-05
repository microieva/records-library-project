import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
//import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import AudioPlayer from "material-ui-audio-player";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { borrowRecord } from "../redux/actions";
import { useRecords } from "../hooks/useRecords";
import { AppState } from "../types";

import { useStyles } from "../hooks/useStyles";
import "../scss/record-view.scss";

interface RouteParams {
  title: string;
}

export const RecordView = () => {
  useRecords();
  const records = useSelector((state: AppState) => state.records.records);
  const { title } = useParams<RouteParams>();

  const record = records.find((r) => r.title === title);
  const history = useHistory();
  const dispatch = useDispatch();
  //const classes = useStyles();

  const handleClickBack = () => {
    history.push("/");
  };

  const handleBorrowClick = (id: any) => {
    dispatch(borrowRecord(id));
  };

  // const muiTheme = createMuiTheme({
  //   palette: {},
  // });

  return (
    <div className="record-view-container">
      {record ? (
        <div className="flex--column">
          <div className="btn-group">
            <button className="btn" onClick={handleClickBack}>
              Go Back
            </button>
            <button
              className="btn"
              onClick={() => handleBorrowClick(record._id)}
            >
              Borrow
            </button>
          </div>

          <div className="flex--row">
            <div>
              <img src={record.image} alt="record" />
            </div>
            <div>
              <h1>{record.title}</h1>
              <p>artist(s):</p>
              <h3>{record.artists.join(", ")}</h3>
              <p>label:</p>
              <h3>
                {record.label}, {record.publishedYear}
              </h3>
              <p>genres:</p>
              <h3>{record.genres.join(", ")}</h3>
            </div>
          </div>
          <div className="tracks-div">
            {record.tracks
              ? record.tracks.map((track, i) => (
                <div key={i} className="track-div">
                  <p>{track.name}</p>
                  {/* <ThemeProvider theme={muiTheme}> */}
                  <AudioPlayer
                    //classes={{root: classes.root}}
                    elevation={1}
                    variation="default"
                    spacing={3}
                    download={false}
                    autoplay={false}
                    order="standart"
                    //preload="auto"
                    loop={false}
                    src={track.sampleUrl}
                    useStyles={useStyles}
                  />
                  {/* </ThemeProvider> */}
                </div>
              ))
              : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};
