import * as React from "react";
import Grid from "@mui/material/Grid";
import { SelectChangeEvent } from "@mui/material/Select";
import Title from "../Title";
import DatePickerComp from "../uiElements/DatePickerComp";
import SelectComp from "../uiElements/SelectComp";

export default function Stat() {
  const [begin, setBegin] = React.useState<Date | null>(null);
  const [end, setEnd] = React.useState<Date | null>(null);
  const [typeData, setTypeData] = React.useState<string | undefined>(undefined);

  const handleChangeTypeData = (event: SelectChangeEvent) => {
    setTypeData(event.target.value as string);
  };

  return (
    <>
      <Grid p={1} container>
        <Grid item sm flexGrow={1}>
          <Title>Статистика</Title>
        </Grid>
        <Grid item mr={1} sx={{ width: 175 }}>
          <DatePickerComp
            value={begin}
            setValue={setBegin}
            label={"Начало периода"}
          />
        </Grid>
        <Grid item mr={1} sx={{ width: 175 }}>
          <DatePickerComp
            value={end}
            setValue={setEnd}
            label={"Конец периода"}
          />
        </Grid>
        <Grid item>
          <SelectComp
            value={typeData}
            onChange={handleChangeTypeData}
            defaultValue={"profit"}
            values={[
              {
                val: "revenue",
                title: "Выручка",
              },
              {
                val: "expenses",
                title: "Расходы",
              },
              {
                val: "profit",
                title: "Прибыль",
              },
            ]}
          />
        </Grid>
      </Grid>
    </>
  );
}
