import {gql} from '@apollo/client';

export const GET_STOCKS_BY_SECTOR = gql`
  query GetStocksBySector($sector: String!) {
    getStocksBySector(sector: $sector) {
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
