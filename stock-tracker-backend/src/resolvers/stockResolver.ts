import {client} from '../../db';
import {
  selectAllStocks,
  selectStockById,
  selectStocksBySector,
  selectMostVolatileStocks,
  selectLeastVolatileStocks,
  selectRecentlyUpdatedStocks,
} from '../queries/stockQueries';

export const stockResolver = {
  Query: {
    getAllStocks: async () => {
      const res = await client.query(selectAllStocks);
      return res.rows;
    },
    getStockByID: async (_, {id}) => {
      const res = await client.query(selectStockById, [id]);
      return res.rows[0];
    },
    getStocksBySector: async (_, {sector}) => {
      const res = await client.query(selectStocksBySector, [sector]);
      return res.rows;
    },
    getMostVolatileStocks: async () => {
      const res = await client.query(selectMostVolatileStocks);
      return res.rows;
    },
    getLeastVolatileStocks: async () => {
      const res = await client.query(selectLeastVolatileStocks);
      return res.rows;
    },
    getRecentlyUpdatedStocks: async () => {
      const res = await client.query(selectRecentlyUpdatedStocks);
      return res.rows;
    },
  },
};
