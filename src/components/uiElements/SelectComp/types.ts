import { SelectChangeEvent } from "@mui/material";

export type TSelectComp = {
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  defaultValue: string;
  values: Array<{ val: string; title: string }>;
};
