import {useEffect} from 'react';
import {setStocks} from '../../../Reducers/Stocks/stockSlice';
import {Stock} from '../../../Reducers/Stocks/Stock.types';
import {AnyAction, Dispatch} from '@reduxjs/toolkit';

export function useSetStocks(
  data: {getAllStocks: Stock[]},
  dispatch: Dispatch<AnyAction>,
) {
  useEffect(() => {
    if (data) {
      dispatch(setStocks({data: data.getAllStocks}));
    }
  }, [dispatch, data]);
}
