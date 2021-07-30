import { combineReducers } from 'redux';
import { authentication } from './auth.reducer';
import { quiz } from './quiz.reducer';
import { getusersdashboard } from './getusers.reducer';

const rootReducers = combineReducers({
  authentication,
  quiz,
  getusersdashboard,
});

export default rootReducers;
