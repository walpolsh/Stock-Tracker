import {Fab, Grid, SxProps} from '@mui/material';
import {StockCard} from '../StockCard/StockCard';
import {useAppSelector} from '../../reduxHooks';
import {Stock} from '../../Reducers/Stocks/Stock.types';
import {AddStockModal} from '../AddStockModal/AddStockModal';
import {useState} from 'react';
import {Add} from '@mui/icons-material';
const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

export function StockList() {
  const {stocks} = useAppSelector(state => state.stocksReducer);
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(state => !state);
  return (
    <Grid container spacing={3}>
      {stocks?.map((stock: Stock) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={stock.id}>
          <StockCard stock={stock} />
        </Grid>
      ))}
      <AddStockModal open={open} handleClose={toggleOpen} />
      <Fab
        sx={fabStyle as SxProps}
        color="primary"
        aria-label="add"
        onClick={toggleOpen}>
        <Add />
      </Fab>
    </Grid>
  );
}
