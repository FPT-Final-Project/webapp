import { combineReducers } from 'redux';
import appointmentReducer from './appointment.reducer';
import authenticationReducer from './auth.reducer';
import dashboardReducer from './dashboard.reducer';
import questionAnswerReducer from './questionAnswer.reducer';
import quizReducer from './quiz.reducer';
import doctorReducer from './doctor.reducer';

const rootReducers = combineReducers({
  authentication: authenticationReducer,
  quiz: quizReducer,
  dashboard: dashboardReducer,
  appointment: appointmentReducer,
  doctor: doctorReducer,
});

export default rootReducers;
