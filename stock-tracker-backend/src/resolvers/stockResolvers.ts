const knexResolver = require('../../db');

const stockResolvers = {
  Query: {
    getAllStocks: async () => {
      return await knexResolver('fake_stocks').select('*');
    },
    getStockByID: async (_, {id}) => {
      return await knexResolver('fake_stocks').where({id}).first();
    },
    getStocksBySector: async (_, {sector}) => {
      return await knexResolver('fake_stocks').where({sector});
    },
    getMostVolatileStocks: async () => {
      return await knexResolver('fake_stocks')
        .orderBy('day_change', 'desc')
        .limit(10);
    },
    getLeastVolatileStocks: async () => {
      return await knexResolver('fake_stocks')
        .orderBy('day_change', 'asc')
        .limit(10);
    },
    getRecentlyUpdatedStocks: async () => {
      return await knexResolver('fake_stocks')
        .orderBy('last_updated', 'desc')
        .limit(10);
    },
  },
  Mutation: {
    addStock: async (
      _,
      {
        symbol,
        companyName,
        sector,
        price,
        volume,
        dayChange,
        fiftyTwoWeekHigh,
        fiftyTwoWeekLow,
        EPS,
        PERatio,
        DividendYield,
        MarketCap,
      },
    ) => {
      return await knexResolver('fake_stocks')
        .insert({
          symbol,
          companyName,
          sector,
          price,
          volume,
          dayChange,
          fiftyTwoWeekHigh,
          fiftyTwoWeekLow,
          EPS,
          PERatio,
          DividendYield,
          MarketCap,
        })
        .returning('*');
    },
    updateStockPrice: async (_, {id, price}) => {
      return await knexResolver('fake_stocks')
        .where({id})
        .update({price})
        .returning('*');
    },
    deleteStock: async (_, {id}) => {
      return await knexResolver('fake_stocks').where({id}).del().returning('*');
    },
  },
};

module.exports = stockResolvers;
