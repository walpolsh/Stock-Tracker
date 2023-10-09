import {gql} from '@apollo/client';

export const DELETE_STOCK = gql`
  mutation DeleteStock($deleteStockId: Int!) {
    deleteStock(id: $deleteStockId) {
      company_name
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
