import {client} from '../../db';

export const resolvers = {
  Query: {
    stocks: async () => {
      const res = await client.query('SELECT * FROM fake_stocks');
      return res.rows.map(row => ({
        id: row.id,
        symbol: row.symbol,
        companyName: row.company_name,
        sector: row.sector,
        price: parseFloat(row.price),
        volume: row.volume,
        lastUpdated: row.last_updated,
        dayChange: parseFloat(row.day_change),
      }));
    },
  },
};
