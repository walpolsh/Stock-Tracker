import React from 'react';
import {StockCardProps} from './StockCard.types';
import {Card, CardContent, Typography} from '@mui/material';

export const StockCard: React.FC<StockCardProps> = ({
  symbol,
  price,
  volume,
}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {symbol}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Volume: {volume}
        </Typography>
      </CardContent>
    </Card>
  );
};
