import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {client} from '../../client'; // Import your Apollo client instance
import {GET_ALL_STOCKS} from '../../Queries/GET_ALL_STOCKS';

export const fetchStocks = createAsyncThunk('stocks/fetchStocks', async () => {
  const {data} = await client.query({
    query: GET_ALL_STOCKS,
  });
  return data;
});

const stocksSlice = createSlice({
  name: 'stocks',
  initialState: {
    stocks: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchStocks.pending, state => {
        state.loading = true;
      })
      .addCase(fetchStocks.fulfilled, (state, action) => {
        state.stocks = action.payload;
        state.loading = false;
      })
      .addCase(fetchStocks.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      });
  },
  reducers: undefined,
});

export default stocksSlice.reducer;
