import { combineReducers } from 'redux';
import { authentication } from './auth.reducer';
import { quiz } from './quiz.reducer';

const rootReducers = combineReducers({
  authentication,
  quiz,
});

export default rootReducers;
