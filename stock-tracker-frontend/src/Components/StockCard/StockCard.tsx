import {Card, CardContent, Typography} from '@mui/material';
import React, {useState} from 'react';
import {StockCardProps} from './StockCard.types';
import {StockCardModal} from './StockCardModal';

export const StockCard: React.FC<StockCardProps> = ({stock}) => {
  const [open, setOpen] = useState(false);
  const {symbol, price, volume} = stock;
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card onClick={handleOpen}>
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
      <StockCardModal open={open} handleClose={handleClose} stock={stock} />
    </>
  );
};
