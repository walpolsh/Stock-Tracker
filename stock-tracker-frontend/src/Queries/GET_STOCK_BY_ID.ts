import {gql} from '@apollo/client';

export const GET_STOCK_BY_ID = gql`
  query GetStockById($id: Int!) {
    getStockById(id: $id) {
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
