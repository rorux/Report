import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { green, orange, blue, red } from "@mui/material/colors";
import { ShowChart } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Modal from "../Modal";
import { TStatRow } from "./types";
import { v1 as uuid } from "uuid";

const colorData = {
  revenue: blue[600],
  profit: green[600],
  expenses: orange[600],
};

const StatRow: React.FC<TStatRow> = ({ site, typeData, monthArray }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid container>
        <Grid item xs sx={{ textAlign: "left" }} p={2}>
          <Typography variant="caption" mr={1}>
            {site.name}
          </Typography>
          <IconButton color="primary" onClick={handleOpen} size="small">
            <ShowChart />
          </IconButton>
        </Grid>
        {site.periods.map((item) => (
          <Grid key={uuid()} item xs sx={{ textAlign: "center" }} p={2}>
            {typeData === "profit" && item !== null && item <= 0 ? (
              <Typography variant="body2" color={red[600]}>
                {item === null ? "-" : item}
              </Typography>
            ) : (
              <Typography variant="body2" color={colorData[typeData]}>
                {item === null ? "-" : item}
              </Typography>
            )}
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ height: 0 }} />
      <Modal
        site={site}
        typeData={typeData}
        monthArray={monthArray}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};

export default StatRow;
