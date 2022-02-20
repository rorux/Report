import React from "react";
import { SelectChangeEvent } from "@mui/material";

export type TSelectComp = {
  value: string | undefined;
  onChange: (event: SelectChangeEvent) => void;
  defaultValue: string;
  values: Array<{ val: string; title: string }>;
};
