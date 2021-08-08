/* eslint-disable no-console */
import { Action, Dispatch } from 'redux';
import _ from 'lodash';
import userService from '../../services/user.service';
import { doFailure, doRequest, doSuccess } from './utils';
import { IUser } from '../../types/user';
import openNotification from '../../utils/notification';

export const AuthActions = {
  LOGIN: '[Auth] Login',
  LOGIN_SUCCESS: '[Auth] Login Success',
  LOGIN_FAIL: '[Auth] Login Fail',

  REGISTER: '[Auth] Register',
  REGISTER_SUCCESS: '[Auth] Register Success',
  REGISTER_FAIL: '[Auth] Register Fail',

  UPDATE_USER: '[Auth] Update User',
  UPDATE_USER_SUCCESS: '[Auth] Update User Success',
  UPDATE_USER_FAIL: '[Auth] Update User Fail',

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

export interface UpdateUserAction extends Action {
  payload: {
    id: string,
    name: string,
    job: string,
    gender: string,
    phone: string,
    address: string,
    avatar: string,
    specialist: string
  };
}

export interface UpdateUserSuccessAction extends Action {
  payload: IUser;
}

export interface UpdateUserFailAction extends Action {
  payload: {
    error: string;
  };
}

const login = (email: string, password: string) => async (dispatch: Dispatch): Promise<void> => {
  try {
    dispatch(doRequest(AuthActions.LOGIN));
    const user = await userService.login(email, password);
    localStorage.setItem('token', user.token || '');
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(doSuccess(AuthActions.LOGIN_SUCCESS, user));
  } catch (error : any) {
    dispatch(doFailure(AuthActions.LOGIN_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
    openNotification('error', error.data.message);
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

const updateUser = (id: string,
  name: string,
  job: string,
  gender: string,
  phone: string,
  address: string,
  avatar: string,
  specialist: string) => (dispatch : Dispatch): void => {
  dispatch(doRequest(AuthActions.UPDATE_USER, { name, job, gender, phone, address, avatar, specialist }));

  userService.updateProfile(id,
    name,
    job,
    gender,
    phone,
    address,
    avatar,
    specialist).then((result:any) => {
    dispatch(doSuccess(AuthActions.UPDATE_USER_SUCCESS, { users: result }));
  }).catch((error: any) => dispatch(doFailure(AuthActions.UPDATE_USER_FAIL, { error: _.get(error, ['respon', 'data', 'message']) })));
};

const logout = () => {
  localStorage.clear();
  openNotification('success', 'Goodbye!');
};

export default {
  login,
  logout,
  register,
  updateUser,
};
