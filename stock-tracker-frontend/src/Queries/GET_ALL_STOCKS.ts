import {gql} from '@apollo/client';

export const GET_ALL_STOCKS = gql`
  query GetAllStocks {
    getAllStocks {
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
