import { TStatSitesData } from "../Stat/types";

export type TModal = {
  site: TStatSitesData;
  typeData: "revenue" | "profit" | "expenses";
  monthArray: Array<string>;
  open: boolean;
  handleClose: () => void;
};
