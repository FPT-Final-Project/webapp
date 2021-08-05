import { Action, Dispatch } from 'redux';
import _ from 'lodash';
import scheduleService from '../../services/schedule.service';
import { ISchedule } from '../../types/schedule';
import { doFailure, doRequest, doSuccess } from './utils';

export const ScheduleActions = {
  GET_SCHEDULES: '[Schedule] Get Schedules',
  GET_SCHEDULES_SUCCESS: '[Schedule] Get Schedules Success',
  GET_SCHEDULES_FAIL: '[Schedule] Get Schedules Fail',
};

export interface GetSchedulesAction extends Action {
  payload: {
    doctorId: string;
  };
}

export interface GetSchedulesSuccessAction extends Action {
  payload: {
    schedules: ISchedule[];
  };
}

export interface GetSchedulesFailAction extends Action {
    payload: {
      error: string;
    };
}

const getSchedules = (doctorId: string) => async (dispatch: Dispatch) => {
  dispatch(doRequest(ScheduleActions.GET_SCHEDULES));
  scheduleService.getSchedulesToday(doctorId)
    .then((result: any) => {
      doSuccess(ScheduleActions.GET_SCHEDULES_SUCCESS, { schedules: result });
      return result;
    })
    .catch((error) => {
      doFailure(ScheduleActions.GET_SCHEDULES_FAIL, { error: _.get(error, ['response', 'data', 'message']) });
      return error;
    });
};

export default {
  getSchedules,
};
