import { Action } from 'redux';
import { IAppointment } from '../../types/appointment';
import { AppointmentActions, GetAppointmentSuccessAction, GetAppointmentFailAction, GetAppointmentsSuccessAction, GetAppointmentsFailAction } from '../actions/appointment.action';

export interface IAppointmentState {
  appointment: IAppointment | undefined;
  appointments: IAppointment[] | undefined;
  error: string | undefined;
}

const initialState: IAppointmentState = {
  appointment: undefined,
  appointments: undefined,
  error: undefined,
};

const appointmentReducer = (state = initialState, action: Action): IAppointmentState => {
  switch (action.type) {
    case AppointmentActions.GET_APPOINTMENT_SUCCESS: {
      const { appointment } = (action as GetAppointmentSuccessAction).payload;
      return { ...state, ...{ appointment } };
    }

    case AppointmentActions.GET_APPOINTMENT_FAIL: {
      const { error } = (action as GetAppointmentFailAction).payload;
      return { ...state, ...{ error } };
    }

    case AppointmentActions.GET_APPOINTMENTS_SUCCESS: {
      const { appointments } = (action as GetAppointmentsSuccessAction).payload;
      return { ...state, ...{ appointments } };
    }

    case AppointmentActions.GET_APPOINTMENTS_FAIL: {
      const { error } = (action as GetAppointmentsFailAction).payload;
      return { ...state, ...{ error } };
    }

    default: {
      return state;
    }
  }
};

export default appointmentReducer;
