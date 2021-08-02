import { Action } from 'redux';
import { IUser } from '../../types/user';
import {
  AuthActions,
  LoginFailAction,
  LoginSuccessAction,
  RegisterAction,
  RegisterSuccessAction,
} from '../actions/auth.action';

export interface IUserState {
  user?: IUser;
  loginProcessing: boolean;
  registerProcessing: boolean;
  isTested: boolean;
  error: string | undefined;
}

const initialState: IUserState = {
  user: undefined,
  loginProcessing: false,
  registerProcessing: false,
  isTested: false,
  error: undefined,
};

export const authentication = (state = initialState, action: Action) => {
  switch (action.type) {
    case AuthActions.LOGIN: {
      return { ...state, ...{ loginProcessing: true } };
    }

    case AuthActions.LOGIN_SUCCESS: {
      const user = (action as LoginSuccessAction).payload;

      return { ...state, ...{ loginProcessing: false, user } };
    }

    case AuthActions.LOGIN_FAIL: {
      const { error } = (action as LoginFailAction).payload;
      return { ...state, ...{ loginProcessing: false, error } };
    }

    case AuthActions.LOGOUT: {
      return { ...state, ...{ i: 2 } };
    }

    case AuthActions.LOGOUT_FAIL: {
      return { ...state, ...{ i: 2 } };
    }

    case AuthActions.LOGOUT_SUCCESS: {
      return { ...state, ...{ i: 2 } };
    }

    case AuthActions.REGISTER: {
      const { isTested } = (action as RegisterAction).payload;
      return { ...state, ...{ registerProcessing: true, isTested } };
    }

    case AuthActions.REGISTER_SUCCESS: {
      const user = (action as RegisterSuccessAction).payload;
      return { ...state, ...{ registerProcessing: false, user } };
    }

    case AuthActions.REGISTER_FAIL: {
      return { ...state, ...{ registerProcessing: false } };
    }

    default: {
      return state;
    }
  }
};
