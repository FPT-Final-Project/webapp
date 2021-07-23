import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './reducers';
import { IUserState } from './reducers/auth.reducer';

export interface IRootState {
  authentication: IUserState
}

export const store = createStore(
  rootReducers,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware),
  ),
);
