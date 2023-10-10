import {gql} from '@apollo/client';

export const UPDATE_STOCK = gql`
  mutation UpdateStock(
    $updateStockId: Int!
    $symbol: String!
    $price: Float!
    $sector: String
    $companyName: String
    $volume: Int
    $dayChange: Float
    $fiftyTwoWeekHigh: Float
    $fiftyTwoWeekLow: Float
    $eps: Float
    $pERatio: Float
    $dividendYield: Float
    $marketCap: Float
    $beta: Float
  ) {
    updateStock(
      id: $updateStockId
      symbol: $symbol
      price: $price
      sector: $sector
      company_name: $companyName
      volume: $volume
      day_change: $dayChange
      fifty_two_week_high: $fiftyTwoWeekHigh
      fifty_two_week_low: $fiftyTwoWeekLow
      eps: $eps
      p_e_ratio: $pERatio
      dividend_yield: $dividendYield
      market_cap: $marketCap
      beta: $beta
    ) {
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
