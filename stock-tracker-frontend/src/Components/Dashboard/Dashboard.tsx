import {useQuery} from '@apollo/client';
import React, {Suspense} from 'react';
import {GET_ALL_STOCKS} from '../../Queries/stockQueries';
import {Container, Typography} from '@mui/material';
import {StockList} from './StockList';

export const Dashboard: React.FC = () => {
  const {loading, error, data} = useQuery(GET_ALL_STOCKS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Stock Dashboard
      </Typography>
      <Suspense fallback={<p>Loading...</p>}>
        {error && <p>Error: {error.message}</p>}
        {!loading && !error && <StockList data={data} />}
      </Suspense>
    </Container>
  );
};
