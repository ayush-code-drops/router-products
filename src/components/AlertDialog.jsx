import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(true);
const navigate =useNavigate()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };

  const handleNavigate = () => {
    navigate('/products')
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Home
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Directly Go To Products Page?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Welcome ! Please head over to the All Products page to see products
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleNavigate}> Go to Products Page</Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}
