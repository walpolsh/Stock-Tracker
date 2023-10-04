import {Grid} from '@mui/material';
import {StockCard} from '../StockCard/StockCard';
import {useAppSelector} from '../../reduxHooks';
import {Stock} from '../../Reducers/Stocks/Stock.types';

export function StockList() {
  const {stocks} = useAppSelector(state => state.stocksReducer);
  return (
    <Grid container spacing={3}>
      {stocks?.map((stock: Stock) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={stock.id}>
          <StockCard stock={stock} />
        </Grid>
      ))}
    </Grid>
  );
}
