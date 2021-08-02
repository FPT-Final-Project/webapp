import { Action } from 'redux';
import { IUser } from '../../types/user';
import {
  AuthActions,
  LoginSuccessAction,
  RegisterAction,
  RegisterSuccessAction,
} from '../actions/auth.action';
import { FailAction } from '../actions/utils';

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

const authenticationReducer = (state = initialState, action: Action): IUserState => {
  switch (action.type) {
    case AuthActions.LOGIN: {
      return { ...state, ...{ loginProcessing: true } };
    }

    case AuthActions.LOGIN_SUCCESS: {
      const user = (action as LoginSuccessAction).payload;

      return { ...state, ...{ loginProcessing: false, user } };
    }

    case AuthActions.LOGIN_FAIL: {
<<<<<<< HEAD
      const { error } = (action as LoginFailAction).payload;
=======
      const { error } = (action as FailAction).payload;

>>>>>>> c86bc605ef1d18b28ecb5d585014e92b76f501a5
      return { ...state, ...{ loginProcessing: false, error } };
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
      const { error } = (action as FailAction).payload;
      return { ...state, ...{ registerProcessing: false, error } };
    }

    default: {
      return state;
    }
  }
};

export default authenticationReducer;
