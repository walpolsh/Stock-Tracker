import {useQuery} from '@apollo/client';
import {Container, Typography} from '@mui/material';
import React, {Suspense} from 'react';
import {GET_ALL_STOCKS} from '../../Queries/GET_ALL_STOCKS';
import {useAppDispatch} from '../../reduxHooks';
import {StockList} from './StockList';
import {useSetStocks} from './Hooks/useSetStocks';

export const Dashboard: React.FC = () => {
  const {loading, error, data} = useQuery(GET_ALL_STOCKS);
  const dispatch = useAppDispatch();
  useSetStocks(data, dispatch);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Stock Dashboard
      </Typography>
      <Suspense fallback={<p>Loading...</p>}>
        {error && <p>Error: {error.message}</p>}
        {!loading && !error && data && <StockList />}
      </Suspense>
    </Container>
  );
};
