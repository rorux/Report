export type TChart = {
  typeData: "revenue" | "profit" | "expenses";
  dataChart: { time: string; amount: number | null }[];
};
