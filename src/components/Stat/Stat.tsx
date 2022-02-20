import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { SelectChangeEvent } from "@mui/material/Select";
import { Divider } from "@mui/material";
import { Typography } from "@mui/material";
import Title from "../Title";
import DatePickerComp from "../uiElements/DatePickerComp";
import SelectComp from "../uiElements/SelectComp";
import StatHeader from "../StatHeader";
import StatRow from "../StatRow";
import { calcStatSites, calcEightMonths } from "./functions";
import { TStatSitesData } from "./types";
import { v1 as uuid } from "uuid";

const todayDate = new Date();

export default function Stat() {
  const [begin, setBegin] = React.useState<Date>(
    new Date(todayDate.getFullYear(), 0, 1)
  );
  const [end, setEnd] = React.useState<Date>(
    new Date(todayDate.getFullYear(), todayDate.getMonth(), 1)
  );
  const [typeData, setTypeData] = React.useState<
    "revenue" | "profit" | "expenses"
  >("profit");

  const [sitesStat, setSitesStat] = React.useState<Array<TStatSitesData>>([]);

  useEffect(() => {
    if (begin > end) {
      setEnd(begin);
    }
    const timeBetweenBeginAndEnd = +end - +begin;
    if (timeBetweenBeginAndEnd > 60 * 60 * 24 * 242 * 1000) {
      setEnd(calcEightMonths(begin));
    }

    const statSitesData: Array<TStatSitesData> = calcStatSites(
      begin,
      end,
      typeData
    );
    setSitesStat(statSitesData);
  }, [begin, end, typeData]);

  const handleChangeTypeData = (event: SelectChangeEvent) => {
    setTypeData(event.target.value as "revenue" | "profit" | "expenses");
  };

  return (
    <>
      <Grid p={1} container>
        <Grid item sm flexGrow={1}>
          <Title>Статистика</Title>
        </Grid>
        <Grid item pr={2} pt={1}>
          <Typography variant="body2" color={"#a5a5a5"}>
            (период не более 8 месяцев)
          </Typography>
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
      <Grid container mt={2}>
        <StatHeader begin={begin} end={end} />
      </Grid>
      <Divider sx={{ height: 0 }} />

      {sitesStat.map((site) => (
        <StatRow key={uuid()} site={site} typeData={typeData} />
      ))}
    </>
  );
}
