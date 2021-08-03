import { Action, Dispatch } from 'redux';
import _ from 'lodash';
import appointmentService from '../../services/appointment.service';
import { IAppointment } from '../../types/appointment';
import { doFailure, doRequest, doSuccess } from './utils';
import { IUser } from '../../types/user';

export const AppointmentActions = {
  GET_APPOINTMENT: '[Appointment] Get Appointment',
  GET_APPOINTMENT_SUCCESS: '[Appointment] Get Appointment Success',
  GET_APPOINTMENT_FAIL: '[Appointment] Get Appointment Fail',

  GET_APPOINTMENTS: '[Appointment] Get Appointments',
  GET_APPOINTMENTS_SUCCESS: '[Appointment] Get Appointments Success',
  GET_APPOINTMENTS_FAIL: '[Appointment] Get Appointments Fail',
};

export interface GetAppointmentAction extends Action {
  payload: {
    appointmentId: string;
  };
}

export interface GetAppointmentSuccessAction extends Action {
  payload: {
    appointment: IAppointment;
  };
}

export interface GetAppointmentFailAction extends Action {
  payload: {
    error: string;
  };
}

export interface GetAppointmentsAction extends Action {
  payload: {
    userId: string;
  };
}

export interface GetAppointmentsSuccessAction extends Action {
  payload: {
    appointments: IAppointment[];
  };
}

export interface GetAppointmentsFailAction extends Action {
  payload: {
    error: string;
  };
}

const getAppointment = (appointmentId: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(doRequest(AppointmentActions.GET_APPOINTMENT));
    const appointment = await appointmentService.getAppointment(appointmentId);

    dispatch(doSuccess(AppointmentActions.GET_APPOINTMENT_SUCCESS, { appointment }));
  } catch (error) {
    dispatch(doFailure(AppointmentActions.GET_APPOINTMENT_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
  }
};

const getAppointments = (user: IUser) => async (dispatch: Dispatch) => {
  try {
    dispatch(doRequest(AppointmentActions.GET_APPOINTMENTS));
    const appointments = await appointmentService.getAppointments(user);

    dispatch(doSuccess(AppointmentActions.GET_APPOINTMENTS_SUCCESS, { appointments }));
  } catch (error) {
    dispatch(doFailure(AppointmentActions.GET_APPOINTMENTS_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
  }
};

export default {
  getAppointment,
  getAppointments,
};
