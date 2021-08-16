import { Action, Dispatch } from 'redux';
import _ from 'lodash';
import { IUser } from '../../types/user';
// import dashboardService from '../../services/userdashboard.service';
// import { doFailure, doRequest, doSuccess } from './utils';

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

export default {
};
