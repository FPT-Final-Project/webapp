/* eslint-disable no-console */
import { Action, Dispatch } from 'redux';
import _ from 'lodash';
import { IUser } from '../../types/user';
import dashboardService from '../../services/userdashboard.service';
import { doFailure, doRequest, doSuccess } from './utils';

export const DashboardActions = {
  GET_USERS: '[DASHBOARD] GET Dashboard Users',
  GET_USERS_SUCCESS: '[DASHBOARD] GET Dashboard Users Success',
  GET_USERS_FAIL: '[DASHBOARD] GET Dashboard Users Fail',
};

export interface GetDashboardUsersAction extends Action {
  payload: {
    users: IUser[];
  };
}

const loadUsers = () => (dispatch : Dispatch): void => {
  dispatch(doRequest(DashboardActions.GET_USERS, {}));

  dashboardService.getDoctor()
    .then((result: any) => {
      dispatch(doSuccess(DashboardActions.GET_USERS_SUCCESS, { users: result }));
    })
    .catch((error: any) => dispatch(doFailure(DashboardActions.GET_USERS_FAIL, { error: _.get(error, ['response', 'data', 'message']) })));
};

export default {
  loadUsers,
};
