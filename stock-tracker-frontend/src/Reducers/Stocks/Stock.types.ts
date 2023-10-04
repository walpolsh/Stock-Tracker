export type Stock = {
  __typename: string;
  id: number;
  symbol: string;
  companyName: string;
  sector: string;
  price: number;
  volume: number;
  lastUpdated: string;
  dayChange: number;
  fiftyTwoWeekHigh: null | number;
  fiftyTwoWeekLow: null | number;
  EPS: number;
  PERatio: null | number;
  DividendYield: number;
  MarketCap: number;
  Beta: number;
};

export type StocksState = {
  stocks: Stock[];
  loading: boolean;
  error: null | string;
};

export type SetStocksAction = {
  type: string;
  payload: {
    data: Stock[];
  };
};
