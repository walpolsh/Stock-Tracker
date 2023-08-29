import {gql} from 'apollo-server';

export const Stock = gql`
  type Stock {
    id: Int!
    symbol: String!
    companyName: String
    sector: String
    price: Float!
    volume: Int!
    lastUpdated: String
    dayChange: Float
  }
  type Query {
    stocks: [Stock]
  }
`;
