const knexResolver = require('../../db');

const stockResolvers = {
  Query: {
    getAllStocks: async () => {
      return await knexResolver(process.env.DB_NAME).select('*');
    },
    getStockByID: async (_, {id}) => {
      return await knexResolver(process.env.DB_NAME).where({id}).first();
    },
    getStocksBySector: async (_, {sector}) => {
      return await knexResolver(process.env.DB_NAME).where({sector});
    },
    getMostVolatileStocks: async () => {
      return await knexResolver(process.env.DB_NAME)
        .orderBy('day_change', 'desc')
        .limit(10);
    },
    getLeastVolatileStocks: async () => {
      return await knexResolver(process.env.DB_NAME)
        .orderBy('day_change', 'asc')
        .limit(10);
    },
    getRecentlyUpdatedStocks: async () => {
      return await knexResolver(process.env.DB_NAME)
        .orderBy('last_updated', 'desc')
        .limit(10);
    },
  },
  Mutation: {
    addStock: async (
      _,
      {
        symbol,
        company_name,
        sector,
        price,
        volume,
        day_change,
        fifty_two_week_high,
        fifty_two_week_low,
        eps,
        p_e_ratio,
        dividend_yield,
        market_cap,
        beta,
      },
    ) => {
      const result = await knexResolver(process.env.DB_NAME)
        .insert({
          symbol,
          company_name,
          sector,
          price,
          volume,
          day_change,
          fifty_two_week_high,
          fifty_two_week_low,
          eps,
          p_e_ratio,
          dividend_yield,
          market_cap,
          beta,
        })
        .returning('*');
      return result[0];
    },

    updateStock: async (
      _,
      {
        id,
        symbol,
        company_name,
        sector,
        price,
        volume,
        day_change,
        fifty_two_week_high,
        fifty_two_week_low,
        eps,
        p_e_ratio,
        dividend_yield,
        market_cap,
        beta,
      },
    ) => {
      const result = await knexResolver(process.env.DB_NAME)
        .where({id})
        .update({
          symbol,
          company_name,
          sector,
          price,
          volume,
          day_change,
          fifty_two_week_high,
          fifty_two_week_low,
          eps,
          p_e_ratio,
          dividend_yield,
          market_cap,
          beta,
        })
        .returning('*');
      return result[0];
    },
    deleteStock: async (_, {id}) => {
      return await knexResolver(process.env.DB_NAME)
        .where({id})
        .del()
        .returning('*');
    },
  },
};

module.exports = stockResolvers;
