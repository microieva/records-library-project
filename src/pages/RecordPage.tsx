import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import AudioPlayer from "material-ui-audio-player";

import { useStyles } from "../hooks/useStyles";
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

  let record = records.find((r) => r.title === title);
  const history = useHistory();

  const handleClickBack = () => {
    history.push("/");
  };

  const muiTheme = createMuiTheme({
    palette: {},
  });

  return (
    <div className="record-page-container">
      {record ? (
        <div className="flex--column">
          <div className="btn-group">
            <button className="btn" onClick={handleClickBack}>
              Go Back
            </button>
            <button className="btn">Borrow</button>
          </div>

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
              <h3>{record.genres.map((genre) => genre).join(", ")}</h3>
            </div>
          </div>
          <div className="tracks-div">
            {record.tracks.map((track, i) => (
              <div key={i} className="track-div">
                <p>{track.name}</p>
                <ThemeProvider theme={muiTheme}>
                  <AudioPlayer
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
                </ThemeProvider>
              </div>
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
