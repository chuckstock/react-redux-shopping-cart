import { combineReducers } from 'redux';
import TeasReducer from './reducer-tea';

const rootReducer = combineReducers({
  teas: TeasReducer
});

export default rootReducer;
