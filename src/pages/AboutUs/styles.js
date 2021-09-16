import { makeStyles } from '@material-ui/core/styles';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    minWidth: pxToRem(320),
    marginBottom: pxToRem(20),
    [theme.breakpoints.up('xs')]: {
      paddingTop: pxToRem(5),
      letterSpacing: pxToRem(0.4),
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: pxToRem(10),
    },
    [theme.breakpoints.up('xl')]: {
      paddingTop: pxToRem(34),
      letterSpacing: pxToRem(0.4),
    },
  },
  gridItem: {
    padding: `${pxToRem(0)} ${pxToRem(12)}`,
  },
  title: {
    fontWeight: 'bold',
    color: theme.palette.primary.contrastText,
    letterSpacing: pxToRem(-0.68),
    [theme.breakpoints.down('xs')]: {
      fontSize: pxToRem(20),
    },
    [theme.breakpoints.up('sm')]: {
      paddingBottom: pxToRem(15),
      fontSize: pxToRem(24),
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: pxToRem(20),
      fontSize: pxToRem(26),
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: pxToRem(28),
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: pxToRem(34),
    },
  },
}));

export default useStyles;
