import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { TStatHeader } from "./types";
import { MONTH_MAP } from "./constants";

const StatHeader: React.FC<TStatHeader> = ({ begin, end }) => {
  let month = begin;
  const monthArray = [];
  while (+month <= +end) {
    const monthIter = month.getMonth();
    const yearIter = month.getFullYear();
    const beginDate = begin.getDate();
    monthArray.push(`${MONTH_MAP[monthIter]}'${yearIter}`);

    if (monthIter === 11) {
      month = new Date(yearIter + 1, 0, beginDate);
    } else {
      month = new Date(yearIter, monthIter + 1, beginDate);
    }
  }
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
