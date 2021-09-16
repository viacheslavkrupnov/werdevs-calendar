import { makeStyles } from '@material-ui/core';

import { pxToRem } from '../../utils/pxToRem';

import bgImage from '../../assets/bgImage.jpeg';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: pxToRem(1920),
    minWidth: pxToRem(330),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    flexGrow: 1,
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'right',
    paddingRight: pxToRem(25),
    [theme.breakpoints.only('xs')]: {
      marginTop: 0,
      marginBottom: 0,
    },
    [theme.breakpoints.only('sm')]: {
      marginBottom: `${pxToRem(20)}`,
    },
    [theme.breakpoints.only('md')]: {
      marginTop: pxToRem(98),
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: pxToRem(86),
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: pxToRem(176),
    },
  },
  title: {
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    fontSize: pxToRem(40),
    letterSpacing: pxToRem(2.2),
    [theme.breakpoints.only('xs')]: {
      letterSpacing: pxToRem(1),
      fontSize: pxToRem(30),
    },
    [theme.breakpoints.only('sm')]: {
      letterSpacing: pxToRem(1.5),
      fontSize: pxToRem(34),
    },
  },
  subtitle: {
    fontSize: pxToRem(22),
    fontWeight: 300,
    letterSpacing: pxToRem(0.6),
    color: theme.palette.subtitleTextGray.main,
    [theme.breakpoints.only('xs')]: {
      letterSpacing: pxToRem(0.3),
      fontSize: pxToRem(16),
    },
    [theme.breakpoints.only('sm')]: {
      letterSpacing: pxToRem(0.4),
      fontSize: pxToRem(18),
    },
  },
}));

export default useStyles;
