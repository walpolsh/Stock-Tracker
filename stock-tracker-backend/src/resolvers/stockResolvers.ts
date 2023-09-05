const knexInstance = require('../../db');

const stockResolvers = {
  Query: {
    getAllStocks: async () => {
      return await knexInstance('fake_stocks').select('*');
    },
    getStockByID: async (_, {id}) => {
      return await knexInstance('fake_stocks').where({id}).first();
    },
    getStocksBySector: async (_, {sector}) => {
      return await knexInstance('fake_stocks').where({sector});
    },
    getMostVolatileStocks: async () => {
      return await knexInstance('fake_stocks')
        .orderBy('day_change', 'desc')
        .limit(10);
    },
    getLeastVolatileStocks: async () => {
      return await knexInstance('fake_stocks')
        .orderBy('day_change', 'asc')
        .limit(10);
    },
    getRecentlyUpdatedStocks: async () => {
      return await knexInstance('fake_stocks')
        .orderBy('last_updated', 'desc')
        .limit(10);
    },
  },
};

export default stockResolvers;
