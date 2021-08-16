import { Action } from 'redux';
import {
  AuthActions,
  LoginSuccessAction,
  RegisterAction,
  RegisterSuccessAction,
  UpdateBookingTimeSuccessAction,
} from '../actions/auth.action';

import { IUser } from '../../types/user';

import { FailAction } from '../actions/utils';

export interface IUserState {
  user?: IUser;
  loginProcessing: boolean;
  registerProcessing: boolean;
  updateProcessing: boolean;
  isTested: boolean;
  password?: string;
  error?: string;
}

const initialState: IUserState = {
  user: undefined,
  loginProcessing: false,
  registerProcessing: false,
  updateProcessing: false,
  isTested: false,
  error: undefined,
  password: undefined,
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

    case AuthActions.UPDATE_USER_SUCCESS: {
      return { ...state, ...{ updateProcessing: true } };
    }

    case AuthActions.GET_ME_SUCCESS: {
      const user = (action as any).payload;
      return { ...state, user: { ...state.user, ...user } };
    }

    case AuthActions.UPDATE_BOOKING_TIME_SUCCESS: {
      const { bookingTime } = (action as UpdateBookingTimeSuccessAction).payload;
      return { ...state, user: { ...state.user, bookingTime } as IUser };
    }
    case AuthActions.UPLOAD_AVATAR_SUCCESS: {
      const user = (action as any).payload;
      return { ...state, user: { ...state.user, ...user } } as any;
    }
    default: {
      return state;
    }
  }
};

export default authenticationReducer;
