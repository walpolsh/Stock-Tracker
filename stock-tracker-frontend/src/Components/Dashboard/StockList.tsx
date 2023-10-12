import {Add, ArrowDownward, ArrowUpward} from '@mui/icons-material';
import {
  Fab,
  Grid,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
} from '@mui/material';
import {useState} from 'react';
import {Stock} from '../../Reducers/Stocks/Stock.types';
import {useAppSelector} from '../../reduxHooks';
import {AddStockModal} from '../AddStockModal/AddStockModal';
import {StockCard} from '../StockCard/StockCard';
import {fabStyle} from './Styles/fabStyle';
import {replaceUnderscores} from '../AddStockModal/Helpers/replaceUnderscores';
import {capitalizeFirstLetter} from '../AddStockModal/Helpers/capitalizeFirstLetter';
import {sortStocks} from './Helpers/sortStocks';
import {formFields} from '../AddStockModal/Constants/formFields';
export function StockList() {
  const {stocks} = useAppSelector(state => state.stocksReducer);
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(state => !state);
  const [sortField, setSortField] = useState('price');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSortFieldChange = (event: SelectChangeEvent<string>) => {
    setSortField(event.target.value as string);
  };

  const toggleSortOrder = () => {
    setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };
  const sortedStocks = [...stocks].sort(sortStocks(sortField, sortOrder));

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Select autoWidth value={sortField} onChange={handleSortFieldChange}>
          {formFields.map(field => (
            <MenuItem key={field.name} value={field.name}>
              {capitalizeFirstLetter(replaceUnderscores(field.name))}
            </MenuItem>
          ))}
        </Select>
        <IconButton onClick={toggleSortOrder}>
          {sortOrder === 'asc' ? <ArrowUpward /> : <ArrowDownward />}
        </IconButton>
      </div>
      <Grid container spacing={3}>
        {sortedStocks?.map((stock: Stock) => (
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
    </div>
  );
}
