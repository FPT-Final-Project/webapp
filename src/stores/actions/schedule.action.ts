import { Action, Dispatch } from 'redux';
import _ from 'lodash';
import scheduleService from '../../services/schedule.service';
import { ISchedule } from '../../types/schedule';
import { doFailure, doRequest, doSuccess } from './utils';

export const ScheduleActions = {
  GET_SCHEDULES: '[Schedule] Get Schedules',
  GET_SCHEDULES_SUCCESS: '[Schedule] Get Schedules Success',
  GET_SCHEDULES_FAIL: '[Schedule] Get Schedules Fail',

  UPDATE_SCHEDULE: '[Schedule] Update Schedule',
  UPDATE_SCHEDULE_SUCCESS: '[Schedule] Update Schedule Success',
  UPDATE_SCHEDULE_FAIL: '[Schedule] Update Schedule Fail',
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

export interface UpdateScheduleAction extends Action {
  payload: {
    idSchedule: string;
  };
}

export interface UpdateScheduleSuccessAction extends Action {
  payload: {
    schedule: ISchedule;
  };
}

export interface UpdateScheduleFailAction extends Action {
    payload: {
      error: string;
    };
}

const getSchedules = (doctorId: string) => async (dispatch: Dispatch) : Promise<any> => {
  try {
    dispatch(doRequest(ScheduleActions.GET_SCHEDULES));
    const schedules = await scheduleService.getSchedulesToday(doctorId);

    dispatch(doSuccess(ScheduleActions.GET_SCHEDULES_SUCCESS, { schedules }));
    return schedules;
  } catch (error) {
    dispatch(doFailure(ScheduleActions.GET_SCHEDULES_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
    return error;
  }
};

const updateSchedules = (idSchedule: string) => async (dispatch: Dispatch) : Promise<any> => {
  try {
    dispatch(doRequest(ScheduleActions.UPDATE_SCHEDULE));
    const schedule = await scheduleService.updateSchedule(idSchedule);

    dispatch(doSuccess(ScheduleActions.UPDATE_SCHEDULE_SUCCESS, { schedule }));
  } catch (error) {
    dispatch(doFailure(ScheduleActions.UPDATE_SCHEDULE_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
  }
};

export default {
  getSchedules, updateSchedules,
};
