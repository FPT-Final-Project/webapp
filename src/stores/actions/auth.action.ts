import { Action, Dispatch } from 'redux';
import _ from 'lodash';
import userService from '../../services/user.service';
import { doFailure, doRequest, doSuccess } from './utils';
import { IUser } from '../../types/user';

export const AuthActions = {
  LOGIN: '[Auth] Login',
  LOGIN_SUCCESS: '[Auth] Login Success',
  LOGIN_FAIL: '[Auth] Login Fail',

  REGISTER: '[Auth] Register',
  REGISTER_SUCCESS: '[Auth] Register Success',
  REGISTER_FAIL: '[Auth] Register Fail',
};

export interface LoginSuccessAction extends Action {
  payload: IUser;
}

export interface LoginFailAction extends Action {
  payload: {
    error: string;
  };
}

export interface RegisterAction extends Action {
  payload: {
    isTested: boolean;
  };
}

export interface RegisterSuccessAction extends Action {
  payload: IUser;
}

export interface RegisterFailAction extends Action {
  payload: {
    error: string;
  };
}

const login = (email: string, password: string) => async (dispatch: Dispatch): Promise<void> => {
  try {
    dispatch(doRequest(AuthActions.LOGIN, { email, password }));
    const user = await userService.login(email, password);

    localStorage.setItem('token', user.token || '');
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(doSuccess(AuthActions.LOGIN_SUCCESS, user));
  } catch (error : any) {
    dispatch(doFailure(AuthActions.LOGIN_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
  }
};

const register = (id: string, name: string, email: string, role: string, password: string, isTested: boolean) => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(doRequest(AuthActions.REGISTER, { isTested }));
      const user = await userService.register(id, name, email, password, role);

      localStorage.setItem('token', user.token || '');
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(doSuccess(AuthActions.REGISTER_SUCCESS, user));
    } catch (error) {
      dispatch(doFailure(AuthActions.REGISTER_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
    }
  };
};

const logout = () => {
  localStorage.clear();
};

export default {
  login,
  logout,
  register,
};
