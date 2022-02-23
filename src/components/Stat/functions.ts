import { sites } from "../../utils/db";
import { MONTH_MAP } from "./constants";

export const calcEightMonths = (begin: Date) => {
  const beginYear = begin.getFullYear();
  const beginMonth = begin.getMonth();
  const beginDate = begin.getDate();

  if (beginMonth < 5) {
    return new Date(beginYear, beginMonth + 7, beginDate);
  } else {
    return new Date(beginYear + 1, beginMonth - 5, beginDate);
  }
};

export const calcStatSites = (
  begin: Date,
  end: Date,
  typeData: "revenue" | "profit" | "expenses"
) => {
  let month = begin;
  const monthArray: Array<{ year: number; month: number }> = [];
  while (+month <= +end) {
    const monthIter = month.getMonth();
    const yearIter = month.getFullYear();
    const beginDate = begin.getDate();
    monthArray.push({ year: yearIter, month: monthIter });

    if (monthIter === 11) {
      month = new Date(yearIter + 1, 0, beginDate);
    } else {
      month = new Date(yearIter, monthIter + 1, beginDate);
    }
  }

  const sitesTable = sites.map((siteObj) => {
    const obj: { name: string; periods: Array<number | null> } = {
      name: siteObj.name,
      periods: [],
    };

    monthArray.forEach((monthObj) => {
      const periodObj = siteObj.periods[monthObj.year][monthObj.month];
      if (periodObj !== null) {
        if (typeData !== "profit") {
          obj["periods"].push(periodObj[typeData]);
        } else {
          const ttt = periodObj.revenue - periodObj.expenses;
          obj.periods.push(ttt);
        }
      } else obj.periods.push(null);
    });
    return obj;
  });

  return sitesTable;
};

export const getListPeriods = (begin: Date, end: Date) => {
  let month = begin;
  const monthArray = [];
  while (+month <= +end) {
    const monthIter = month.getMonth();
    const yearIter = month.getFullYear();
    const beginDate = begin.getDate();
    monthArray.push(`${MONTH_MAP[monthIter]}'${yearIter}`);

    if (monthIter === 11) {
      month = new Date(yearIter + 1, 0, beginDate);
    } else {
      month = new Date(yearIter, monthIter + 1, beginDate);
    }
  }
  return monthArray;
};
