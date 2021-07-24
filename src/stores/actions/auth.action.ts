import { Action, Dispatch } from 'redux';
import _ from 'lodash';
import userService from '../../services/user.service';
import { doFailure, doRequest, doSuccess } from './utils';
import { IUser } from '../../types/user';

export const AuthActions = {
  LOGIN: '[Auth] Login',
  LOGIN_SUCCESS: '[Auth] Login Success',
  LOGIN_FAIL: '[Auth] Login Fail',

  LOGOUT: '[Auth] Logout',
  LOGOUT_SUCCESS: '[Auth] Logout Success',
  LOGOUT_FAIL: '[Auth] Logout Fail',

  REGISTER: '[Auth] Register',
  REGISTER_SUCCESS: '[Auth] Register Success',
  REGISTER_FAIL: '[Auth] Register Fail',
};

export interface LoginSuccessAction extends Action {
  payload: IUser,
}

export interface LoginFailAction extends Action {
  payload: {
    error: string,
  }
}

export interface LogoutAction extends Action {
  payload: {}
}

export interface RegisterAction extends Action {
  payload: {
    name: string,
    email: string,
    password: string,
  }
}

export interface RegisterSuccessAction extends Action {
  payload: IUser
}

export interface RegisterFailAction extends Action {
  payload: {
    error: string
  }
}

const login = (email: string, password: string) => (dispatch: Dispatch): void => {
  dispatch(doRequest(AuthActions.LOGIN, { email, password }));

  userService.login(email, password)
    .then((result) => {
      localStorage.setItem('token', result.data.token);
      dispatch(doSuccess(AuthActions.LOGIN_SUCCESS, result.data));
    })
    .catch((error) => {
      dispatch(doFailure(AuthActions.LOGIN_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
    });
};

const register = (name: string, email: string, role: string, password: string) => (dispatch: Dispatch): void => {
  dispatch(doRequest(AuthActions.REGISTER, {}));

  userService.register(name, email, password, role)
    .then((result) => {
      localStorage.setItem('token', result.data.token);
      dispatch(doSuccess(AuthActions.REGISTER_SUCCESS, result.data));
    })
    .catch((error) => {
      dispatch(doFailure(AuthActions.REGISTER_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
    });
};

const logout = () => {
  localStorage.clear();
};

export default {
  login,
  logout,
  register,
};
