import {gql} from '@apollo/client';

export const GET_STOCK_BY_ID = gql`
  query GetStockById($id: Int!) {
    getStockById(id: $id) {
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
