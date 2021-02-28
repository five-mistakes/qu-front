import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';

const useStyles = makeStyles({
    root: {
      alignSelf: "center",
    },
    container: {
      fontWidth: "bold",
      fontSize: 14,
      color: "black"
    }
});

export default function TicketDialog({open, handleCancel, handleConfirmation, facility}) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  return (
    <div>
      <Dialog classes={{root: classes.root}} open={open} onClose={handleCancel} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Book a queue</DialogTitle>
        <DialogContent classes={{root: classes.container}}>
          <DialogContentText>
              There is an available place in the queue in<br/>
              Pleace enter your email to confirm your reservation.
              You will receive confirmation details about your booking.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleConfirmation(email)} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
