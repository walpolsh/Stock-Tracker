import {createSlice} from '@reduxjs/toolkit';
import {reducers} from './reducers';

const stocksSlice = createSlice({
  name: 'stocks',
  initialState: {
    stocks: [],
    loading: false,
    error: null,
  },
  reducers,
});

export const {setStocks} = stocksSlice.actions;
export const stocksReducer = stocksSlice.reducer;
