import { makeStyles } from '@material-ui/core/styles';

import { pxToRem } from '../../utils/pxToRem';
import indigo from '@material-ui/core/colors/indigo';

const useStyles = makeStyles(theme => {
  return {
    root: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'unset',
      boxSizing: 'border-box',
      backgroundColor: theme.palette.secondary.main,
      fontSize: pxToRem(14),
      fontWeight: 400,
      letterSpacing: 0,
      color: theme.palette.subtitleTextGray.main,
    },
    calendar: {
      width: '100%',
      maxWidth: pxToRem(467),
      display: 'flex',
      margin: '3% 10%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.subtitleTextGray,
    },
    calendarHeader: {
      width: '100%',
      padding: '0 4%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.palette.secondary.main,
    },
    headerText: {
      fontSize: pxToRem(15),
      textTransform: 'uppercase',
      letterSpacing: pxToRem(1.2),
      wordSpacing: pxToRem(8),
    },
    headerTile: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      overflow: 'hidden',
      fontSize: pxToRem(15),
    },
    headerIcon: {
      color: theme.palette.secondary.contrastText,
      padding: 0,
    },
    gridList: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.secondary.main,
    },
    gridTile: {
      display: 'flex',
      position: 'relative',
      textAlign: 'center',
      justifyContent: 'center',
    },
    gridDays: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    selected: {
      color: `${theme.palette.primary.main}`,
      '&::after': {
        position: 'absolute',
        bottom: pxToRem(3),
        content: '""',
        display: 'block',
        width: pxToRem(6),
        height: pxToRem(6),
        borderRadius: pxToRem(3),
        backgroundColor: theme.palette.primary.main,
      },
    },
    today: {
      padding: `${pxToRem(11)} 0`,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    'today selected': {
      color: theme.palette.primary.contrastText,
    },
    paper: {
      width: pxToRem(39),
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontWeight: 400,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: indigo[100],
      },
    },
    disabled: {
      color: theme.palette.disabledDate.main,
      fontWeight: 500,
    },
    line: {
      width: '90%',
      backgroundColor: theme.palette.disabledDate.main,
      margin: `${pxToRem(8)} 0`,
    },
    colorArrow: {
      color: theme.palette.subtitleTextGray.main,
    },
  };
});

export default useStyles;
