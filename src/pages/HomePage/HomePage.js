import React from 'react';
import Helmet from 'react-helmet';

import { Grid, Typography } from '@material-ui/core';

import Calendar from '../../components/Calendar/Calendar';

import ModalCalendar from '../../components/ModalCalendar/ModalCalendar';

import useStyles from './styles';

const HomePage = () => {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>{'Home Page'}</title>
      </Helmet>

      <Grid component="section" container spacing={0} className={classes.root}>
        <Grid item className={classes.content}>
          <h1 className={classes.title}>
            choose the day
            <br />
            for the meeting
          </h1>
          <Typography className={classes.subtitle}>
            We encourage you to book your
            <br />
            appointment online.
            <br />
            This will save you time.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Calendar />
        </Grid>
      </Grid>
      <ModalCalendar />
    </>
  );
};

export default HomePage;
