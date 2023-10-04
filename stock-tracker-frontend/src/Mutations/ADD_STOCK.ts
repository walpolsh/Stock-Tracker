import {gql} from '@apollo/client';

export const ADD_STOCK = gql`
  mutation AddStock(
    $symbol: String!
    $companyName: String
    $sector: String
    $price: Float!
    $volume: Int
    $dayChange: Float
    $fiftyTwoWeekHigh: Float
    $fiftyTwoWeekLow: Float
    $EPS: Float
    $PERatio: Float
    $DividendYield: Float
    $MarketCap: Float
  ) {
    addStock(
      symbol: $symbol
      companyName: $companyName
      sector: $sector
      price: $price
      volume: $volume
      dayChange: $dayChange
      fiftyTwoWeekHigh: $fiftyTwoWeekHigh
      fiftyTwoWeekLow: $fiftyTwoWeekLow
      EPS: $EPS
      PERatio: $PERatio
      DividendYield: $DividendYield
      MarketCap: $MarketCap
    ) {
      id
      symbol
      companyName
      sector
      price
      volume
      lastUpdated
      dayChange
      fiftyTwoWeekHigh
      fiftyTwoWeekLow
      EPS
      PERatio
      DividendYield
      MarketCap
      Beta
    }
  }
`;
