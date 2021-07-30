import { Action, Dispatch } from 'redux';
import { doRequest } from './utils';

export const GetUserDashboard = {
  GET_USERS: '[DASHBOARD] GET_USERS',
};

export interface GetUserDashBoardAction extends Action {
    payload: {
      getusers: any[];
    };
}

const getUser = () => (dispatch : Dispatch): void => {
  dispatch(doRequest(GetUserDashboard.GET_USERS, {}));
//   get DB
};

export default getUser;
