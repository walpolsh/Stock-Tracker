import {useQuery} from '@apollo/client';
import React from 'react';
import {StockCard} from '../StockCard/StockCard';
import {GET_STOCKS} from './getStocksQuery';

export const Dashboard: React.FC = () => {
  const {loading, error, data} = useQuery(GET_STOCKS);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Stock Dashboard</h1>
      {data.stocks.map((stock: any) => (
        <StockCard key={stock.id} {...stock} />
      ))}
    </div>
  );
};
