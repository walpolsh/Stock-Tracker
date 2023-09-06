import {Grid} from '@mui/material';
import {StockCard} from '../StockCard/StockCard';

export function StockList({data}: any) {
  return (
    <Grid container spacing={3}>
      {data?.getAllStocks.map((stock: any) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={stock.id}>
          <StockCard stock={stock} />
        </Grid>
      ))}
    </Grid>
  );
}
