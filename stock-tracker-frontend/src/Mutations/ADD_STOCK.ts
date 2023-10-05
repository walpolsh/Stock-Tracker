import {gql} from '@apollo/client';

export const ADD_STOCK = gql`
  mutation AddStock(
    $symbol: String!
    $company_name: String
    $sector: String
    $price: Float!
    $volume: Int
    $day_change: Float
    $fifty_two_week_high: Float
    $fifty_two_week_low: Float
    $eps: Float
    $p_e_ratio: Float
    $dividend_yield: Float
    $market_cap: Float
  ) {
    addStock(
      symbol: $symbol
      company_name: $company_name
      sector: $sector
      price: $price
      volume: $volume
      day_change: $day_change
      fifty_two_week_high: $fifty_two_week_high
      fifty_two_week_low: $fifty_two_week_low
      eps: $eps
      p_e_ratio: $p_e_ratio
      dividend_yield: $dividend_yield
      market_cap: $market_cap
    ) {
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
