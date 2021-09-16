import * as actions from '../actions/types';

const initialState = {
  isOpen: false,
  currentDate: new Date(),
  selectedDate: null,
  selectedDatesArray: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_NEXT_MONTH:
      return {
        ...state,
        currentDate: action.payload,
      };

    case actions.SET_PREV_MONTH:
      return {
        ...state,
        currentDate: action.payload,
      };

    case actions.SET_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.payload,
      };

    case actions.SET_SELECTED_DATES_ARRAY:
      return {
        ...state,
        selectedDatesArray: action.payload,
      };

    default:
      return state;
  }
};
