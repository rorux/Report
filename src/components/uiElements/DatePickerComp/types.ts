import React from "react";

export type TDatePickerComp = {
  value: Date;
  setValue: React.Dispatch<React.SetStateAction<Date>>;
  label: string;
};
