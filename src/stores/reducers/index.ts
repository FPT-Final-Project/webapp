import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';

const rootReducers = combineReducers({
  authReducer,
});

export default rootReducers;
