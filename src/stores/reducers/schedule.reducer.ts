import { Action } from 'redux';
import { ISchedule } from '../../types/schedule';
import { ScheduleActions, GetSchedulesSuccessAction, GetSchedulesFailAction } from '../actions/schedule.action';

export interface IScheduleState {
  schedule: ISchedule | undefined;
  schedules: ISchedule[] | undefined;
  error: string | undefined;
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

    default: {
      return state;
    }
  }
};

export default scheduleReducer;
