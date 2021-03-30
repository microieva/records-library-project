import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      [theme.breakpoints.down("sm")]: {
        //height: "1rem",
        //padding: "1rem",
      },

      backgroundColor: "rgb(30, 33, 41)",
      border: "1px solid rgb(94, 122, 85)",
      height: "3rem",
      margin: "0.2rem 0",
      maxWidth: "60%",
    },
    customBadge: {
      backgroundColor: "rgb(94, 122, 85)",
      color: "rgb(11, 14, 19)",
      border: "1px solid rgb(11, 14, 19)",
    },
    playIcon: {
      color: "rgb(94, 122, 85)",
      fontSize: "1rem",
    },
    volumeIcon: {
      color: "rgb(94, 122, 85)",
      fontSize: "1rem",
    },
    volumeSlider: {
      color: "rgb(94, 122, 85)",
      fontSize: "1rem",
    },
    progressTime: {
      color: "rgb(94, 122, 85)",
      fontSize: "1rem",
    },
    mainSlider: {
      fontSize: "1rem",
      color: "rgb(94, 122, 85)",
      "& .MuiSlider-rail": {
        color: "rgb(94, 122, 85)",
      },
      "& .MuiSlider-track": {
        color: "rgb(94, 122, 85)",
      },
      "& .MuiSlider-thumb": {
        fontSize: "1rem",
        color: "rgb(94, 122, 85)",
      },
    },
  };
});
