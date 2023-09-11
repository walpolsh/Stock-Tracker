import {gql} from '@apollo/client';

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
