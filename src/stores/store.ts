import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './reducers';
import { IUserState } from './reducers/auth.reducer';
import { IQuizState } from './reducers/quiz.reducer';
import { IQuestionAnswerState } from './reducers/questionAnswer.reducer';
import { IAppointmentState } from './reducers/appointment.reducer';
import { IDoctorState } from './reducers/doctor.reducer';
import { IScheduleState } from './reducers/schedule.reducer';

export interface IRootState {
  authentication: IUserState,
  quiz: IQuizState,
  questionAnswer: IQuestionAnswerState,
  appointment: IAppointmentState,
  doctor: IDoctorState,
  schedule: IScheduleState,
}

export const store = createStore(
  rootReducers,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware),
  ),
);
