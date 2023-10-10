export type FormValues = {
  symbol: string;
  company_name: string;
  sector: string;
  price: number;
  volume: number;
  day_change: number;
  fifty_two_week_high: number | null;
  fifty_two_week_low: number | null;
  eps: number;
  p_e_ratio: number | null;
  dividend_yield: number;
  market_cap: number;
  beta: number;
};
