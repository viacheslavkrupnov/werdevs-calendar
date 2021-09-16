import * as actions from './types';

export const setNextMonth = currentDate => ({
  type: actions.SET_NEXT_MONTH,
  payload: currentDate,
});

export const setPrevMonth = currentDate => ({
  type: actions.SET_PREV_MONTH,
  payload: currentDate,
});

export const setSelectedDate = selected => ({
  type: actions.SET_SELECTED_DATE,
  payload: selected,
});

export const setSelectedDatesArray = selected => ({
  type: actions.SET_SELECTED_DATES_ARRAY,
  payload: selected,
});
