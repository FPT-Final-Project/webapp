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

  CANCEL_APPOINTMENT: '[Appointment] Cancel Appointment',
  CANCEL_APPOINTMENT_SUCCESS: '[Appointment] Cancel Appointment Success',
  CANCEL_APPOINTMENT_FAIL: '[Appointment] Cancel Appointment Fail',

  CREATE_APPOINTMENT: '[Appointment] Create Appointment',
  CREATE_APPOINTMENT_SUCCESS: '[Appointment] Create Appointment Success',
  CREATE_APPOINTMENT_FAIL: '[Appointment] Create Appointment Fail',
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

export interface CancelAppointmentSuccessAction extends Action {
  payload: {
    appointment: IAppointment;
  };
}

export interface CancelAppointmentFailAction extends Action {
  payload: {
    error: string;
  };
}

export interface CreateAppointmentSuccessAction extends Action {
  payload: {
    appointment: IAppointment;
  };
}

export interface CreateAppointmentFailAction extends Action {
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

const cancelAppointment = (user: IUser, appointmentId: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(doRequest(AppointmentActions.CANCEL_APPOINTMENT));
    const appointment = await appointmentService.cancelAnAppointment(user, appointmentId);

    dispatch(doSuccess(AppointmentActions.CANCEL_APPOINTMENT_SUCCESS, { appointment }));
  } catch (error) {
    dispatch(doFailure(AppointmentActions.CANCEL_APPOINTMENT_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
  }
};

const createAppointment = (user: IUser, name: any, startOfAppointment: any, endOfAppointment: any, doctorId: any, doctorName: any) => async (dispatch: Dispatch) => {
  try {
    dispatch(doRequest(AppointmentActions.CREATE_APPOINTMENT));
    const appointment = await appointmentService.makeAnAppointment(user, name, startOfAppointment, endOfAppointment, doctorId, doctorName);

    dispatch(doSuccess(AppointmentActions.CREATE_APPOINTMENT_SUCCESS, { appointment }));
  } catch (error) {
    dispatch(doFailure(AppointmentActions.CREATE_APPOINTMENT_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
  }
};

export default {
  getAppointment,
  getAppointments,
  cancelAppointment,
  createAppointment,
};
