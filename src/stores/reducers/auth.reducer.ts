import { Action } from 'redux';
import { UpdateUserAction,
  AuthActions,
  LoginSuccessAction,
  RegisterAction,
  RegisterSuccessAction,
} from '../actions/auth.action';
import { IUser } from '../../types/user';

import { FailAction } from '../actions/utils';

export interface IUserState {
  user?: IUser;
  loginProcessing: boolean;
  registerProcessing: boolean;
  isTested: boolean;
  error?: string;
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
      const { error } = (action as FailAction).payload;

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

    case AuthActions.UPDATE_USER: {
      const { id, name, job, gender, phone, address, avatar, specialist } = (action as UpdateUserAction).payload;
      console.log((action as UpdateUserAction).payload);
      return { ...state, ...{ user: { ...state.user, name, job, gender, phone, address, avatar, specialist } } } as any;
    }
    default: {
      return state;
    }
  }
};

export default authenticationReducer;
