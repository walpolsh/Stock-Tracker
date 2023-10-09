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
import {ADD_STOCK} from '../../Mutations/ADD_STOCK';
import {setStocks} from '../../Reducers/Stocks/stockSlice';
import {useAppDispatch, useAppSelector} from '../../reduxHooks';
import {formFields} from './formFields';
import {capitalizeFirstLetter, replaceUnderscores} from './helpers';

export function AddStockModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  const {
    handleSubmit,
    control,
    setError,
    formState: {errors},
  } = useForm();

  const [addStock] = useMutation(ADD_STOCK);
  const dispatch = useAppDispatch();
  const {stocks} = useAppSelector(state => state.stocksReducer);
  const onSubmit = async (data: {
    price: string;
    volume: string;
    day_change: string;
    fifty_two_week_high: string;
    fifty_two_week_low: string;
    eps: string;
    p_e_ratio: string;
    dividend_yield: string;
    market_cap: string;
    beta: string;
  }) => {
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
      const response = await addStock({variables: numericData});
      console.log('Stock added:', response.data);
      dispatch(setStocks({data: [...stocks, response.data.addStock]}));
      handleClose();
    } catch (error) {
      console.error('Error adding stock:', error.message);
      setError('submit', {
        type: error.message,
        message: 'An error occurred while adding the stock.',
      });
    }
  };
  const errorMessage = errors.submit?.message
    ? String(errors.submit.message)
    : '';

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
          Add New Stock
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          {formFields.map(({name, Icon, type, step}) => (
            <Controller
              key={name}
              name={name}
              control={control}
              defaultValue=""
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

          {errorMessage ? (
            <Typography color="error">{errorMessage}</Typography>
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
