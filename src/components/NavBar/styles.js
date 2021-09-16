import { makeStyles } from '@material-ui/core/styles';
import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
  appBar: {
    boxShadow: 'none',
    maxWidth: pxToRem(1920),
    minWidth: pxToRem(320),
    minHeight: pxToRem(76),
    flexShrink: 0,
    [theme.breakpoints.up('xs')]: {
      padding: `${pxToRem(0)} ${pxToRem(25)} ${pxToRem(0)} ${pxToRem(15)}`,
    },
    [theme.breakpoints.up('sm')]: {
      padding: `${pxToRem(14)} ${pxToRem(45)} ${pxToRem(14)} ${pxToRem(55)}`,
    },
    [theme.breakpoints.up('md')]: {
      padding: `${pxToRem(18)} ${pxToRem(70)} ${pxToRem(18)} ${pxToRem(60)}`,
    },
    [theme.breakpoints.up('lg')]: {
      padding: `${pxToRem(28)} ${pxToRem(86)} ${pxToRem(28)} ${pxToRem(76)}`,
    },
    [theme.breakpoints.up('xl')]: {
      padding: `${pxToRem(33)} ${pxToRem(110)} ${pxToRem(33)} ${pxToRem(100)}`,
    },
  },
  toolbar: {
    width: '100%',
    height: '100%',
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoLink: {
    flexGrow: 1,
  },
  logo: {
    [theme.breakpoints.up('xs')]: {
      height: pxToRem(50),
    },
    [theme.breakpoints.up('sm')]: {
      height: pxToRem(54),
    },
    [theme.breakpoints.up('md')]: {
      height: pxToRem(59),
    },
    [theme.breakpoints.up('lg')]: {
      height: pxToRem(63),
    },
    [theme.breakpoints.up('xl')]: {
      height: pxToRem(78),
    },
  },
  drawerList: {
    width: pxToRem(250),
  },
  navList: {
    display: 'flex',
  },
  navLinks: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    whiteSpace: 'nowrap',
    padding: 0,
    marginLeft: pxToRem(56),
    color: theme.palette.primary.contrastText,
    fontSize: pxToRem(28),
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: pxToRem(0.56),
    '&:first-child': {
      marginLeft: pxToRem(20),
    },
  },
  active: {
    '&::after': {
      position: 'absolute',
      top: '115%',
      left: '50%',
      right: 0,
      transform: 'translate(-50%, -50%)',
      content: '""',
      display: 'block',
      width: pxToRem(14),
      height: pxToRem(14),
      borderRadius: pxToRem(7),
      backgroundColor: theme.palette.primary.main,
    },
  },
  icon: {
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
