import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';

import {
  Typography,
  Dialog,
  IconButton,
  OutlinedInput,
  Hidden,
  DialogActions,
  Button,
  Grid,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';

import { toggleModal } from '../../store/actions/toggleModalActions';
import {
  setSelectedDate,
  setSelectedDatesArray,
} from '../../store/actions/dateActions';

import useStyles from './styles';

const ModalCalendar = React.memo(() => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const isOpenModal = useSelector(store => store.toggleModalReducer.isOpen);
  const selectedDate = useSelector(store => store.dateReducer.selectedDate);
  const selectedDatesArray = useSelector(
    store => store.dateReducer.selectedDatesArray,
  );

  const handleClose = () => {
    dispatch(toggleModal(false));
  };

  const handleClickCloseByButton = selectedDate => {
    const newArraySelectedDates = selectedDatesArray.filter(item => {
      return item !== selectedDate;
    });

    dispatch(setSelectedDate(null));
    dispatch(setSelectedDatesArray(newArraySelectedDates));

    dispatch(toggleModal(false));
  };

  return (
    <Dialog
      open={isOpenModal}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      className={classes.root}
    >
      <Hidden xsDown>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={() => handleClickCloseByButton(selectedDate)}
        >
          <CloseIcon className={classes.closeIcon} />
        </IconButton>
      </Hidden>
      <Grid container spacing={2} className={classes.formContainer}>
        <Grid item className={classes.gridItem}>
          <Typography component="p" className={classes.modalTitle}>
            Month
          </Typography>
          <OutlinedInput
            id="outlined-adornment-weight1"
            defaultValue={format(new Date(selectedDate), 'MMMM')}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            margin="dense"
            labelWidth={0}
            className={classes.input}
          />
        </Grid>
        <Grid item className={classes.gridItem}>
          <Typography component="p" className={classes.modalTitle}>
            Day
          </Typography>
          <OutlinedInput
            id="outlined-adornment-weight2"
            defaultValue={format(new Date(selectedDate), 'do iiii')}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            labelWidth={0}
            className={classes.input}
          />
        </Grid>
      </Grid>
      <Hidden smUp>
        <DialogActions className={classes.btnGroup}>
          <Button
            color="primary"
            variant="contained"
            className={classes.btn}
            onClick={() => handleClickCloseByButton(selectedDate)}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            className={classes.btn}
            onClick={handleClose}
          >
            Select
          </Button>
        </DialogActions>
      </Hidden>
    </Dialog>
  );
});

export default ModalCalendar;
