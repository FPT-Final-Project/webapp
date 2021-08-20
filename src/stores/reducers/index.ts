import { combineReducers } from 'redux';
import appointmentReducer from './appointment.reducer';
import authenticationReducer from './auth.reducer';
import quizReducer from './quiz.reducer';
import doctorReducer from './doctor.reducer';
import feedbackReducer from './feedback.reducer';

const rootReducers = combineReducers({
  authentication: authenticationReducer,
  quiz: quizReducer,
  appointment: appointmentReducer,
  doctor: doctorReducer,
  feedback: feedbackReducer,
});

export default rootReducers;
