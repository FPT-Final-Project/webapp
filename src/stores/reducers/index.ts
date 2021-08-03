import { combineReducers } from 'redux';
import { authentication } from './auth.reducer';
import questionAnswerReducer from './questionAnswer.reducer';
import { quiz } from './quiz.reducer';

const rootReducers = combineReducers({
  authentication,
  quiz,
  questionAnswer: questionAnswerReducer,
});

export default rootReducers;
