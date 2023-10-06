import {
  Box,
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
  const formattedDate = format(parseISO(last_updated), 'EEEE, MMMM do, yyyy');

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>
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
            <ListItemText primary="Beta" secondary={`${beta}`} />
          </ListItem>
        </List>
      </Box>
    </Modal>
  );
}
