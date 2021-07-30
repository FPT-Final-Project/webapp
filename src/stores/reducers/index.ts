import { combineReducers } from 'redux';
import { authentication } from './auth.reducer';
import { quiz } from './quiz.reducer';
import { dashboard } from './dashboard.reducer';

const rootReducers = combineReducers({
  authentication,
  quiz,
  dashboard,
});

export default rootReducers;
