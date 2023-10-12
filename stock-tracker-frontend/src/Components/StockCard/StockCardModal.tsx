import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Modal,
  Typography,
} from '@mui/material';
import {
  Business,
  TrendingUp,
  ShowChart,
  Functions,
  Equalizer,
  MonetizationOn,
  BarChart,
  MultilineChart,
  Update,
  PriceChange,
  VolumeUpSharp,
} from '@mui/icons-material';
import {format, parseISO} from 'date-fns';
import {Stock} from '../../Reducers/Stocks/Stock.types';
import {DELETE_STOCK} from '../../Mutations/DELETE_STOCK';
import {useMutation} from '@apollo/client';
import {useState} from 'react';
import {setStocks} from '../../Reducers/Stocks/stockSlice';
import {useAppDispatch, useAppSelector} from '../../reduxHooks';
import {StockCardModalStyles} from './StockCardModalStyles';
import {EditStockCard} from './EditStockCard';

export function StockCardModal({
  open,
  handleClose,
  stock,
}: {
  open: boolean;
  handleClose: () => void;
  stock: Stock;
}) {
  const {
    id,
    symbol,
    company_name,
    sector,
    price,
    volume,
    last_updated,
    day_change,
    fifty_two_week_high,
    fifty_two_week_low,
    eps,
    p_e_ratio,
    dividend_yield,
    market_cap,
    beta,
  } = stock;
  const [deleteStock] = useMutation(DELETE_STOCK);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const {stocks} = useAppSelector(state => state.stocksReducer);
  const [openEditStock, setOpenEditStock] = useState(false);

  const dispatch = useAppDispatch();

  const handleOpenConfirmDialog = () => {
    setConfirmDialogOpen(true);
  };

  const handleCloseConfirmDialog = () => {
    setConfirmDialogOpen(false);
  };
  const formattedDate = format(parseISO(last_updated), 'EEEE, MMMM do, yyyy');
  const handleRemoveStock = async () => {
    try {
      await deleteStock({variables: {deleteStockId: id}});
      dispatch(
        setStocks({
          data: [...stocks.filter(stock => stock.id !== id)],
        }),
      );
      handleClose();
    } catch (error) {
      console.error('Error adding stock:', error.message);
    }
  };
  return openEditStock ? (
    <EditStockCard open={open} handleClose={handleClose} stock={stock} />
  ) : (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={StockCardModalStyles}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {symbol}
        </Typography>
        <Typography id="modal-modal-description" sx={{mt: 2}}>
          {company_name}
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <PriceChange />
            </ListItemIcon>
            <ListItemText primary="Price" secondary={`$${price}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <VolumeUpSharp />
            </ListItemIcon>
            <ListItemText primary="Volume" secondary={`${volume}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Business />
            </ListItemIcon>
            <ListItemText primary="Sector" secondary={sector} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Update />
            </ListItemIcon>
            <ListItemText primary="Last Updated" secondary={formattedDate} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <TrendingUp />
            </ListItemIcon>
            <ListItemText primary="Day Change" secondary={`${day_change}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ShowChart />
            </ListItemIcon>
            <ListItemText
              primary="52 Week High"
              secondary={`${fifty_two_week_high}`}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ShowChart />
            </ListItemIcon>
            <ListItemText
              primary="52 Week Low"
              secondary={`${fifty_two_week_low}`}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Functions />
            </ListItemIcon>
            <ListItemText primary="EPS" secondary={`${eps}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Equalizer />
            </ListItemIcon>
            <ListItemText primary="P/E Ratio" secondary={`${p_e_ratio}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MonetizationOn />
            </ListItemIcon>
            <ListItemText
              primary="Dividend Yield"
              secondary={`${dividend_yield}`}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BarChart />
            </ListItemIcon>
            <ListItemText primary="Market Cap" secondary={`${market_cap}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MultilineChart />
            </ListItemIcon>
            <ListItemText primary="Beta" secondary={`${beta || 'N/A'}`} />
          </ListItem>
        </List>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenEditStock(true)}>
            Edit Stock
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenConfirmDialog}>
            Remove Stock
          </Button>
        </div>
        <Dialog
          open={confirmDialogOpen}
          onClose={handleCloseConfirmDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">{'Confirm Removal'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to remove this stock?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseConfirmDialog} color="primary">
              Cancel
            </Button>
            <Button
              onClick={async () => {
                await handleRemoveStock();
                handleCloseConfirmDialog();
              }}
              color="primary"
              autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Modal>
  );
}
