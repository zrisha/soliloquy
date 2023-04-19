import { combineReducers } from 'redux';
import thinkaloud from './thinkaloud.js';
import params from './params.js';

const rootReducer = combineReducers({
  thinkaloud,
  params
});

export default rootReducer;
