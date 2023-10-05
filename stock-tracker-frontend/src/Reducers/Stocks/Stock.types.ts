export type Stock = {
  __typename: string;
  id: number;
  symbol: string;
  company_name: string;
  sector: string;
  price: number;
  volume: number;
  last_updated: string;
  day_change: number;
  fifty_two_week_high: null | number;
  fifty_two_week_low: null | number;
  eps: number;
  p_e_ratio: null | number;
  dividend_yield: number;
  market_cap: number;
  beta: number;
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
