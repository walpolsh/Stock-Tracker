import {insertStock, updatePrice, deleteStock} from '../queries/stockQueries';
import {client} from '../../db';
export const stockMutation = {
  Mutation: {
    addStock: async (_, {symbol, companyName, price}) => {
      const res = await client.query(insertStock, [symbol, companyName, price]);
      return res.rows[0];
    },
    updateStockPrice: async (_, {id, price}) => {
      const res = await client.query(updatePrice, [price, id]);
      return res.rows[0];
    },
    deleteStock: async (_, {id}) => {
      const res = await client.query(deleteStock, [id]);
      return res.rows[0];
    },
  },
};
