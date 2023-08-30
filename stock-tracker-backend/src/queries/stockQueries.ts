export const selectAllStocks = 'SELECT * FROM fake_stocks';
export const selectStockById = 'SELECT * FROM fake_stocks WHERE id = $1';
export const selectStocksBySector =
  'SELECT * FROM fake_stocks WHERE sector = $1';
export const selectMostVolatileStocks =
  'SELECT * FROM fake_stocks ORDER BY day_change DESC LIMIT 10';
export const selectLeastVolatileStocks =
  'SELECT * FROM fake_stocks ORDER BY day_change ASC LIMIT 10';
export const selectRecentlyUpdatedStocks =
  'SELECT * FROM fake_stocks ORDER BY last_updated DESC LIMIT 10';
export const insertStock =
  'INSERT INTO fake_stocks(symbol, company_name, price) VALUES($1, $2, $3) RETURNING *';
export const updatePrice =
  'UPDATE fake_stocks SET price = $1 WHERE id = $2 RETURNING *';
export const deleteStock = 'DELETE FROM fake_stocks WHERE id = $1 RETURNING *';
