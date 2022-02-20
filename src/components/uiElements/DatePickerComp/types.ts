import React from "react";

export type TDatePickerComp = {
  value: Date | null;
  setValue: React.Dispatch<React.SetStateAction<Date | null>>;
  label: string;
};
