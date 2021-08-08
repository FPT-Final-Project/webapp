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
<<<<<<< HEAD
  questionAnswer: questionAnswerReducer,
=======
  doctor: doctorReducer,
>>>>>>> 67fd2dd62d04b21ad7872ff901d3c945f149b8b3
});

export default rootReducers;
