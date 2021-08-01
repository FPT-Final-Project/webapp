import { Action } from 'redux';
import { IAppointment } from '../../types/appointment';
import { AppointmentActions, GetAppointmentSuccessAction } from '../actions/appointment.action';

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

    default: {
      return state;
    }
  }
};

export default appointmentReducer;
