import {Box, Modal, Typography} from '@mui/material';

export function StockCardModal(
  open: boolean,
  handleClose: () => void,
  symbol: string,
  price: number,
  volume: number,
) {
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
          Price: {price} <br />
          Volume: {volume}
        </Typography>
      </Box>
    </Modal>
  );
}
