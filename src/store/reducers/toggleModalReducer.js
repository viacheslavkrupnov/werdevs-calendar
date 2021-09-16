import * as actions from '../actions/types';

const initialState = {
  isOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_MODAL:
      return {
        ...state,
        isOpen: action.payload,
      };

    default:
      return state;
  }
};
