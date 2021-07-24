import { combineReducers } from 'redux';
import { authentication } from './auth.reducer';

const rootReducers = combineReducers({
  authentication,
});

export default rootReducers;
