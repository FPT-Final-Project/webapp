import { combineReducers } from 'redux';
import appointmentReducer from './appointment.reducer';
import authenticationReducer from './auth.reducer';
import dashboardReducer from './dashboard.reducer';
import quizReducer from './quiz.reducer';

const rootReducers = combineReducers({
  authentication: authenticationReducer,
  quiz: quizReducer,
  dashboard: dashboardReducer,
  appointment: appointmentReducer,
});

export default rootReducers;
