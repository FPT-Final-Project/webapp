/* eslint-disable eol-last */
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

  CHANGE_PASSWORD: '[Auth] Change Password',
  CHANGE_PASSWORD_SUCCESS: '[Auth] Change Password Success',
  CHANGE_PASSWORD_FAIL: '[Auth] Change Password Fail',

  GET_ME: '[Auth] Get Me',
  GET_ME_SUCCESS: '[Auth] Get Me Success',
  GET_ME_FAIL: '[Auth] Get Me Fail',

  UPLOAD_AVATAR: '[Auth] Upload Avatar',
  UPLOAD_AVATAR_SUCCESS: '[Auth] Upload Avatar Success',
  UPLOAD_AVATAR_FAIL: '[Auth] Upload Avatar Fail',

  UPDATE_AVATAR: '[Auth] Update Avatar',
  UPDATE_AVATAR_SUCCESS: '[Auth] Update Avatar Success',
  UPDATE_AVATAR_FAIL: '[Auth] Update Avatar Fail',

  LOGIN_TOKEN: '[Auth] Login with Token',

  UPDATE_BOOKING_TIME: '[Doctor] Update Booking Time',
  UPDATE_BOOKING_TIME_SUCCESS: '[Doctor] Update Booking Time Success',
  UPDATE_BOOKING_TIME_FAIL: '[Doctor] Update Booking Time Fail',
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
  payload: string
}

export interface UpdateUserSuccessAction extends Action {
  payload: IUser;
}

export interface UpdateUserFailAction extends Action {
  payload: {
    error: string;
  };
}

export interface ChangePasswordAction extends Action {
  payload: {
    currentPass: string,
    newPass: string,
    confirmPass: string,
  };
}

export interface ChangePasswordSuccessAction extends Action {
  payload: IUser;
}

export interface ChangePasswordFailAction extends Action {
  payload: {
    error: string;
  };
}

export interface UpdateBookingTimeSuccessAction extends Action {
  payload: {
    bookingTime: string[];
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

const updateUser = (values: any) => async (dispatch : Dispatch): Promise<void> => {
  try {
    dispatch(doRequest(AuthActions.UPDATE_USER, { values }));
    await userService.updateProfile(values);
    dispatch(doSuccess(AuthActions.UPDATE_USER_SUCCESS, 'Success'));
  } catch (error: any) {
    dispatch(doFailure(AuthActions.UPDATE_USER_FAIL, { error: _.get(error, ['respon', 'data', 'message']) }));
  }
};

const logout = () => {
  localStorage.clear();
  openNotification('success', 'Goodbye!');
};

const changePassword = (newPass: string) => (dispatch : Dispatch): void => {
  dispatch(doRequest(AuthActions.CHANGE_PASSWORD, { newPass }));

  userService.changePassword(newPass)
    .then(() => {
      logout();
    }).catch((error: any) => dispatch(
      doFailure(
        AuthActions.CHANGE_PASSWORD_FAIL,
        { error: _.get(error, ['response', 'data', 'message']) },
      ),
    ));
};

const getMe = () => async (dispatch: Dispatch): Promise<IUser> => {
  try {
    dispatch(doRequest(AuthActions.GET_ME));
    const result = await userService.getMe();
    dispatch(doSuccess(AuthActions.GET_ME_SUCCESS, result));
    return result;
  } catch (error: any) {
    dispatch(doFailure(AuthActions.GET_ME_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
    return error;
  }
};
const uploadImage = (body: any) => async (dispatch: Dispatch): Promise<IUser> => {
  try {
    dispatch(doRequest(AuthActions.UPLOAD_AVATAR));
    const result = await userService.uploadAvatar(body);
    dispatch(doSuccess(AuthActions.UPLOAD_AVATAR_SUCCESS, result));
    return result;
  } catch (error: any) {
    dispatch(doFailure(AuthActions.UPLOAD_AVATAR_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
    return error;
  }
};

const updateAvatar = (body: any) => async (dispatch: Dispatch): Promise<IUser> => {
  try {
    dispatch(doRequest(AuthActions.UPDATE_AVATAR));
    const result = await userService.updateAvatar(body);
    dispatch(doSuccess(AuthActions.UPDATE_AVATAR_SUCCESS, result));
    return result;
  } catch (error: any) {
    dispatch(doFailure(AuthActions.UPDATE_AVATAR_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
    return error;
  }
};

const loginWithToken = (token: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(doRequest(AuthActions.LOGIN_TOKEN));
    const result = await userService.loginWithToken(token);
    localStorage.setItem('user', JSON.stringify(result));
    dispatch(doSuccess(AuthActions.LOGIN_SUCCESS, result));
  } catch (error: any) {
    dispatch(doFailure(AuthActions.LOGIN_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
  }
};

const updateBookingTime = (bookingTime: string[]) => async (dispatch: Dispatch) => {
  try {
    dispatch(doRequest(AuthActions.UPDATE_BOOKING_TIME));
    await userService.updateBookingTime(bookingTime);
    dispatch(doSuccess(AuthActions.UPDATE_BOOKING_TIME_SUCCESS, { bookingTime }));
  } catch (error) {
    dispatch(doFailure(AuthActions.UPDATE_BOOKING_TIME_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
  }
};

export default {
  updateAvatar,
  uploadImage,
  login,
  logout,
  register,
  updateUser,
  changePassword,
  getMe,
  loginWithToken,
  updateBookingTime,
};
