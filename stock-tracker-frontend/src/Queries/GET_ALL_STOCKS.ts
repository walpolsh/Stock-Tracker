import {gql} from '@apollo/client';

export const GET_ALL_STOCKS = gql`
  query GetAllStocks {
    getAllStocks {
      id
      symbol
      company_name
      sector
      price
      volume
      last_updated
      day_change
      fifty_two_week_high
      fifty_two_week_low
      eps
      p_e_ratio
      dividend_yield
      market_cap
      beta
    }
  }
`;
