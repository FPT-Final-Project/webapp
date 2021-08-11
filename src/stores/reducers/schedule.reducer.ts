import { Action } from 'redux';
import { ISchedule } from '../../types/schedule';
import {
  ScheduleActions,
  GetSchedulesSuccessAction,
  GetSchedulesFailAction,
  UpdateScheduleFailAction,
  UpdateScheduleSuccessAction,
} from '../actions/schedule.action';

export interface IScheduleState {
  schedule?: ISchedule;
  schedules?: ISchedule[];
  error?: string;
}

const initialState: IScheduleState = {
  schedule: undefined,
  schedules: undefined,
  error: undefined,
};

const scheduleReducer = (state = initialState, action: Action): IScheduleState => {
  switch (action.type) {
    case ScheduleActions.GET_SCHEDULES_SUCCESS: {
      const { schedules } = (action as GetSchedulesSuccessAction).payload;
      return { ...state, ...{ schedules } };
    }

    case ScheduleActions.GET_SCHEDULES_FAIL: {
      const { error } = (action as GetSchedulesFailAction).payload;
      return { ...state, ...{ error } };
    }

    case ScheduleActions.UPDATE_SCHEDULE_SUCCESS: {
      const { schedule } = (action as UpdateScheduleSuccessAction).payload;
      return { ...state, ...{ schedule } };
    }

    case ScheduleActions.UPDATE_SCHEDULE_FAIL: {
      const { error } = (action as UpdateScheduleFailAction).payload;
      return { ...state, ...{ error } };
    }

    default: {
      return state;
    }
  }
};

export default scheduleReducer;
