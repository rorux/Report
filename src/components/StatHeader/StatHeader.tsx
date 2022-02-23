import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { TStatHeader } from "./types";

const StatHeader: React.FC<TStatHeader> = ({ monthArray }) => {
  return (
    <>
      <Grid item xs sx={{ textAlign: "left" }} p={2}>
        <Typography variant="overline">
          <strong>Сайты</strong>
        </Typography>
      </Grid>
      {monthArray.map((month) => (
        <Grid key={month} item xs sx={{ textAlign: "center" }} p={2}>
          <Typography variant="overline" color="#555">
            <strong>{month}</strong>
          </Typography>
        </Grid>
      ))}
    </>
  );
};

export default StatHeader;
