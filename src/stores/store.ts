import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './reducers';
import { IUserState } from './reducers/auth.reducer';
import { IQuizState } from './reducers/quiz.reducer';
import { IDashboardState } from './reducers/dashboard.reducer';

export interface IRootState {
  authentication: IUserState,
  quiz: IQuizState,
  dashboard: IDashboardState
}

export const store = createStore(
  rootReducers,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware),
  ),
);
