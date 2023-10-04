import {SetStocksAction, StocksState} from './Stock.types';

export const reducers = {
  setStocks: (state: StocksState, action: SetStocksAction) => {
    const {data} = action.payload;
    state.stocks = data;
  },
};
