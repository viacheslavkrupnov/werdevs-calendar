import { combineReducers } from 'redux';

import dateReducer from './dateReducers';
import toggleModalReducer from './toggleModalReducer';

export default combineReducers({
  dateReducer,
  toggleModalReducer,
});
