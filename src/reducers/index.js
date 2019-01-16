import { counter } from './Counter';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
