import { makeStyles } from '@material-ui/core/styles';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
  modalTitle: {
    color: theme.palette.liteGray.main,
    fontSize: pxToRem(16),
    letterSpacing: pxToRem(-0.4),
    fontWeight: 450,
  },
  closeButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: pxToRem(4),
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.contrastText,
    },
    borderRadius: 0,
  },
  closeIcon: {
    fontSize: pxToRem(20),
  },
  input: {
    fontSize: pxToRem(16),
    fontWeight: 550,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  gridItem: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  formContainer: {
    padding: `${pxToRem(30)} ${pxToRem(20)} ${pxToRem(20)}`,
  },
  btnGroup: {
    marginRight: pxToRem(12),
  },
  btn: {
    color: theme.palette.primary.contrastText,
    borderRadius: pxToRem(5),
  },
}));

export default useStyles;
