const {gql} = require('apollo-server');

const Stock = gql`
  scalar DateTime

  type Stock {
    id: Int!
    symbol: String!
    companyName: String
    sector: String
    price: Float!
    volume: Int!
    lastUpdated: DateTime
    dayChange: Float
    fiftyTwoWeekHigh: Float
    fiftyTwoWeekLow: Float
    EPS: Float
    PERatio: Float
    DividendYield: Float
    MarketCap: Float
    Beta: Float
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
      companyName: String
      sector: String
      price: Float!
      volume: Int
      dayChange: Float
      fiftyTwoWeekHigh: Float
      fiftyTwoWeekLow: Float
      EPS: Float
      PERatio: Float
      DividendYield: Float
      MarketCap: Float
    ): Stock!
    updateStockPrice(id: Int!, price: Float!): Stock!
    deleteStock(id: Int!): Stock!
  }
`;
module.exports = Stock;
