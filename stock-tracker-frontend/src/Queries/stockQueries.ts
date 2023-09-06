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

export const ADD_STOCK = gql`
  mutation AddStock($symbol: String!, $companyName: String, $price: Float!) {
    addStock(symbol: $symbol, companyName: $companyName, price: $price) {
      id
      symbol
      companyName
      price
    }
  }
`;
