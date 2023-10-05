const {gql} = require('apollo-server');

const Stock = gql`
  scalar DateTime

  type Stock {
    id: Int!
    symbol: String!
    company_name: String
    sector: String
    price: Float!
    volume: Int!
    last_updated: DateTime
    day_change: Float
    fifty_two_week_high: Float
    fifty_two_week_low: Float
    eps: Float
    p_e_ratio: Float
    dividend_yield: Float
    market_cap: Float
    beta: Float
  }

  type Query {
    getAllStocks: [Stock]
    getStockByID(id: Int!): Stock
    getStocksBySector(sector: String!): [Stock]
    getMostVolatileStocks: [Stock]
    getLeastVolatileStocks: [Stock]
    getRecentlyUpdatedStocks: [Stock]
  }

  type Mutation {
    addStock(
      symbol: String!
      company_name: String
      sector: String
      price: Float!
      volume: Int
      day_change: Float
      fifty_two_week_high: Float
      fifty_two_week_low: Float
      eps: Float
      p_e_ratio: Float
      dividend_yield: Float
      market_cap: Float
      beta: Float
    ): Stock!
    updateStockPrice(id: Int!, price: Float!): Stock!
    deleteStock(id: Int!): Stock!
  }
`;
module.exports = Stock;
