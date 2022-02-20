import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { TStatRow } from "./types";
import { v1 as uuid } from "uuid";

const StatRow: React.FC<TStatRow> = ({ site }) => {
  return (
    <>
      <Grid container>
        <Grid item xs sx={{ textAlign: "left" }} p={2}>
          <Typography variant="caption">{site.name}</Typography>
        </Grid>
        {site.periods.map((item) => (
          <Grid key={uuid()} item xs sx={{ textAlign: "center" }} p={2}>
            <Typography variant="body2">
              {item === null ? "-" : item}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ height: 0 }} />
    </>
  );
};

export default StatRow;
