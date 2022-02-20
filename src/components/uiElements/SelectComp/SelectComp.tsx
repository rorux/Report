import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { TSelectComp } from "./types";

const SelectComp: React.FC<TSelectComp> = ({
  value,
  onChange,
  values,
  defaultValue,
}) => {
  return (
    <Select
      defaultValue={defaultValue}
      labelId="type-data"
      id="type-data-select"
      value={value}
      onChange={onChange}
      size="small"
    >
      {values.map((value, ind) => (
        <MenuItem key={ind} value={value.val}>
          {value.title}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectComp;
