import { counter } from './Counter';
import { favorite } from './Favorite';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  counter,
  favorite,
});

export default rootReducer;
