import * as React from "react";
import TextField from "@mui/material/TextField";
import ruLocale from "date-fns/locale/ru";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { TDatePickerComp } from "./types";

const DatePickerComp: React.FC<TDatePickerComp> = ({
  value,
  setValue,
  label,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
      <DatePicker
        views={["year", "month"]}
        minDate={new Date("2020-01-01")}
        maxDate={new Date("2022-06-30")}
        label={label}
        mask={"__.__.____"}
        value={value}
        onChange={(newValue) => {
          if (newValue !== null) setValue(newValue);
        }}
        renderInput={(params) => <TextField size="small" {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DatePickerComp;
