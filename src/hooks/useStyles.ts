import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: any) => {
  return {
    root: {
      [theme.breakpoints.down("sm")]: {
        //width: '100%'

        height: "1rem",
        padding: "1rem",
      },
      "& .MiuPaper-root": {
        backgroundColor: "transperent",
        border: "1px solid rgb(94, 122, 85)",
      },
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
