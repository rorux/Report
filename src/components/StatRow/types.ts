import { TStatSitesData } from "../Stat/types";

export type TStatRow = {
  site: TStatSitesData;
  typeData: "revenue" | "profit" | "expenses";
};
