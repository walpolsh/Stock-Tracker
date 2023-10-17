const seedData = require('../seed/seedData');
const mockAddStock = jest.fn();

jest.mock('../../src/resolvers/stockResolvers', () => ({
  __esModule: true,
  Mutation: {addStock: mockAddStock},
}));

mockAddStock.mockImplementation((_, newStock) => {
  return Promise.resolve({
    ...seedData.find(stock => stock.symbol === newStock.symbol),
    ...newStock,
  });
});

const {
  Mutation: {addStock},
} = require('../../src/resolvers/stockResolvers');

describe('addStock Mutation', () => {
  it('should add a stock and return it', async () => {
    const newStock = {
      symbol: 'ENB',
      company_name: 'Enbridge',
      sector: 'Technology',
      price: 150,
      volume: 100000,
      last_updated: new Date().toISOString(),
      day_change: 0.5,
      fifty_two_week_high: 200,
      fifty_two_week_low: 100,
      eps: 3.15,
      p_e_ratio: 30,
      dividend_yield: 0.6,
      market_cap: 2000000000,
      beta: 1.2,
    };

    mockAddStock.mockResolvedValueOnce(newStock);

    const addedStock = await addStock(null, newStock);

    expect(addedStock).toEqual(expect.objectContaining(newStock));
    expect(mockAddStock).toHaveBeenCalledWith(null, newStock);
  });
});
