import {useQuery} from '@apollo/client';
import React from 'react';
import {StockCard} from '../StockCard/StockCard';
import {GET_STOCKS} from './getStocksQuery';
import {Container, Grid, Typography} from '@mui/material';

export const Dashboard: React.FC = () => {
  const {loading, error, data} = useQuery(GET_STOCKS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Stock Dashboard
      </Typography>
      <Grid container spacing={3}>
        {data.stocks.map((stock: any) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={stock.id}>
            <StockCard stock={stock} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
