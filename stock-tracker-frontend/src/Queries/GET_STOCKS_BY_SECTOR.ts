import {gql} from '@apollo/client';

export const GET_STOCKS_BY_SECTOR = gql`
  query GetStocksBySector($sector: String!) {
    getStocksBySector(sector: $sector) {
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
