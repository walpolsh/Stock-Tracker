const knexInstance = require('../db');
const stockMutations = {
  Mutation: {
    addStock: async (_, {symbol, company_name, price}) => {
      return await knexInstance('fake_stocks')
        .insert({symbol, company_name, price})
        .returning('*');
    },
    updateStockPrice: async (_, {id, price}) => {
      return await knexInstance('fake_stocks')
        .where({id})
        .update({price})
        .returning('*');
    },
    deleteStock: async (_, {id}) => {
      return await knexInstance('fake_stocks').where({id}).del().returning('*');
    },
  },
};

export default stockMutations;
