import React from 'react';
import {StockCardProps} from './StockCard.types';

export const StockCard: React.FC<StockCardProps> = ({
  symbol,
  price,
  volume,
}) => {
  return (
    <div>
      <h2>{symbol}</h2>
      <p>Price: {price}</p>
      <p>Volume: {volume}</p>
    </div>
  );
};
