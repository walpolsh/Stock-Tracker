import {Add} from '@mui/icons-material';
import {Fab, Grid, SxProps} from '@mui/material';
import {useState} from 'react';
import {Stock} from '../../Reducers/Stocks/Stock.types';
import {useAppSelector} from '../../reduxHooks';
import {AddStockModal} from '../AddStockModal/AddStockModal';
import {StockCard} from '../StockCard/StockCard';
const fabStyle = {
  position: 'fixed',
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
