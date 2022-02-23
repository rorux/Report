import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Chart from "../Chart";
import { TModal } from "./types";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalRender: React.FC<TModal> = ({
  site,
  typeData,
  monthArray,
  open,
  handleClose,
}) => {
  const dataChart: { time: string; amount: number | null }[] = [];
  for (let i = 0; i < monthArray.length; i++) {
    dataChart.push({ time: monthArray[i], amount: site.periods[i] });
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {site.name}
        </Typography>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 300,
          }}
        >
          <Chart typeData={typeData} dataChart={dataChart} />
        </Paper>
      </Box>
    </Modal>
  );
};

export default ModalRender;
