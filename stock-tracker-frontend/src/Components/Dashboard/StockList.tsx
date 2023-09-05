import React from 'react';
import {StockCard} from '../StockCard/StockCard';
import {Grid} from '@mui/material';

export function StockList(data: any) {
  return (
    <Grid container spacing={3}>
      {data.stocks.map((stock: any) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={stock.id}>
          <StockCard stock={stock} />
        </Grid>
      ))}
    </Grid>
  );
}
