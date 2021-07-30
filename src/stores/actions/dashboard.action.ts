import { Action, Dispatch } from 'redux';
import { IUser } from '../../types/user';
import { doRequest } from './utils';

export const DashboardActions = {
  GET_USERS: '[DASHBOARD] GET Dashboard Users',
};

export interface GetDashboardUsersAction extends Action {
    payload: {
      users: IUser[];
    };
}

const getUser = () => (dispatch : Dispatch): void => {
  dispatch(doRequest(DashboardActions.GET_USERS, {}));
//   get DB
};

export default getUser;
