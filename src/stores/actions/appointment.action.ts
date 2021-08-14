import { Action, Dispatch } from 'redux';
import _ from 'lodash';
import appointmentService from '../../services/appointment.service';
import { IAppointment } from '../../types/appointment';
import { doFailure, doRequest, doSuccess } from './utils';
import { IUser } from '../../types/user';
import openNotification from '../../utils/notification';

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
    return appointment;
  } catch (error) {
    dispatch(doFailure(AppointmentActions.GET_APPOINTMENT_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
    return error;
  }
};

const getAppointments = () => async (dispatch: Dispatch) => {
  try {
    dispatch(doRequest(AppointmentActions.GET_APPOINTMENTS));
    const appointments = await appointmentService.getAppointments();

    dispatch(doSuccess(AppointmentActions.GET_APPOINTMENTS_SUCCESS, { appointments }));
    return appointments;
  } catch (error) {
    dispatch(doFailure(AppointmentActions.GET_APPOINTMENTS_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
    return error;
  }
};

const cancelAppointment = (appointmentId: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(doRequest(AppointmentActions.CANCEL_APPOINTMENT));
    const appointments = await appointmentService.cancelAnAppointment(appointmentId);

    dispatch(doSuccess(AppointmentActions.CANCEL_APPOINTMENT_SUCCESS, { appointments }));
    openNotification('success', 'You canceled your appointment !');
    return appointments;
  } catch (error) {
    dispatch(doFailure(AppointmentActions.CANCEL_APPOINTMENT_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
    return error;
  }
};

const createAppointment = (
  patientId: string,
  patientName: string,
  name: string,
  startOfAppointment: number,
  endOfAppointment: number,
  doctorId: string,
  doctorName: string,
) => async (dispatch: Dispatch) => {
  try {
    dispatch(doRequest(AppointmentActions.CREATE_APPOINTMENT));
    const appointment = await appointmentService.makeAnAppointment(
      patientId, patientName, name, startOfAppointment, endOfAppointment, doctorId, doctorName,
    );

    dispatch(doSuccess(AppointmentActions.CREATE_APPOINTMENT_SUCCESS, { appointment }));
    openNotification('success', 'Payment confirmation successful, your appointment has been added to the list !');
    return appointment;
  } catch (error) {
    dispatch(doFailure(AppointmentActions.CREATE_APPOINTMENT_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
    return error;
  }
};

export default {
  getAppointment,
  getAppointments,
  cancelAppointment,
  createAppointment,
};
