import {Card, CardContent, Typography} from '@mui/material';
import React, {useState} from 'react';
import {StockCardProps} from './Types/StockCard.types';
import {StockCardModal} from './StockCardModal';

export const StockCard: React.FC<StockCardProps> = ({stock}) => {
  const [open, setOpen] = useState(false);
  const {symbol, price, volume, sector} = stock;
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card onClick={handleOpen} sx={{cursor: 'pointer'}}>
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
          <Typography variant="body2" color="text.secondary">
            Sector: {sector}
          </Typography>
        </CardContent>
      </Card>
      <StockCardModal open={open} handleClose={handleClose} stock={stock} />
    </>
  );
};
