import {useMutation} from '@apollo/client';
import {
  Box,
  Button,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import {Controller, useForm} from 'react-hook-form';
import {Stock} from '../../Reducers/Stocks/Stock.types';
import {setStocks} from '../../Reducers/Stocks/stockSlice';
import {useAppDispatch, useAppSelector} from '../../reduxHooks';
import {AddStockStyles} from '../AddStockModal/Styles/AddStockStyles';
import {formFields} from '../AddStockModal/Constants/formFields';

import {useState} from 'react';
import {UPDATE_STOCK} from '../../Mutations/UPDATE_STOCK';
import {replaceUnderscores} from '../AddStockModal/Helpers/replaceUnderscores';
import {capitalizeFirstLetter} from '../AddStockModal/Helpers/capitalizeFirstLetter';
import {FormValues} from './Types/FormValues.types';
import {submitData} from './Types/submitData.types';
export function EditStockCard({
  open,
  handleClose,
  stock,
}: {
  open: boolean;
  handleClose: () => void;
  stock: Stock;
}) {
  const {handleSubmit, control} = useForm<FormValues>({
    defaultValues: {
      symbol: stock.symbol,
      company_name: stock.company_name,
      sector: stock.sector,
      price: stock.price,
      volume: stock.volume,
      day_change: stock.day_change,
      fifty_two_week_high: stock.fifty_two_week_high,
      fifty_two_week_low: stock.fifty_two_week_low,
      eps: stock.eps,
      p_e_ratio: stock.p_e_ratio,
      dividend_yield: stock.dividend_yield,
      market_cap: stock.market_cap,
      beta: stock.beta,
    },
  });

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [updateStock] = useMutation(UPDATE_STOCK);
  const dispatch = useAppDispatch();
  const {stocks} = useAppSelector(state => state.stocksReducer);

  const onSubmit = async (data: submitData) => {
    const numericData = {
      ...data,
      price: parseFloat(data.price),
      volume: parseInt(data.volume, 10),
      day_change: parseFloat(data.day_change),
      fifty_two_week_high: parseFloat(data.fifty_two_week_high),
      fifty_two_week_low: parseFloat(data.fifty_two_week_low),
      eps: parseFloat(data.eps),
      p_e_ratio: parseFloat(data.p_e_ratio),
      dividend_yield: parseFloat(data.dividend_yield),
      market_cap: parseFloat(data.market_cap),
      beta: parseFloat(data.beta),
    };

    try {
      const response = await updateStock({
        variables: {...numericData, updateStockId: stock.id},
      });
      dispatch(
        setStocks({
          data: stocks.map(prevStock =>
            prevStock.id === stock.id
              ? {...response.data.updateStock, id: stock.id}
              : prevStock,
          ),
        }),
      );
      handleClose();
    } catch (error) {
      console.error('Error editing stock:', error.message);
      setSubmitError('An error occurred while editing the stock.');
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={AddStockStyles}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Stock
          </Typography>
          {formFields.map(({name, Icon, type, step}) => (
            <Controller
              key={name}
              name={name as keyof FormValues}
              control={control}
              defaultValue={undefined}
              render={({field}) => (
                <TextField
                  {...field}
                  label={capitalizeFirstLetter(replaceUnderscores(name))}
                  fullWidth
                  margin="normal"
                  type={type}
                  inputProps={{step}}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          ))}
          {submitError ? (
            <Typography color="error">{submitError}</Typography>
          ) : (
            ''
          )}
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
