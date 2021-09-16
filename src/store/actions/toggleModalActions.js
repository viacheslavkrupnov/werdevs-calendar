import * as actions from './types';

export const toggleModal = isOpen => ({
  type: actions.TOGGLE_MODAL,
  payload: isOpen,
});
