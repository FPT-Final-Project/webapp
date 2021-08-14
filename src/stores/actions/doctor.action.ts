import { Action, Dispatch } from 'redux';
import _ from 'lodash';
import doctorService from '../../services/doctor.service';
import { IDoctor } from '../../types/doctor';
import { doFailure, doRequest, doSuccess } from './utils';

export const DoctorActions = {
  GET_DOCTOR: '[Doctor] Get Doctor',
  GET_DOCTOR_SUCCESS: '[Doctor] Get Doctor Success',
  GET_DOCTOR_FAIL: '[Doctor] Get Doctor Fail',

  GET_DOCTORS: '[Doctor] Get Doctors',
  GET_DOCTORS_SUCCESS: '[Doctor] Get Doctors Success',
  GET_DOCTORS_FAIL: '[Doctor] Get Doctors Fail',
};

export interface GetDoctorAction extends Action {
  payload: {
    doctorId: string;
  };
}

export interface GetDoctorSuccessAction extends Action {
  payload: {
    doctor: IDoctor;
  };
}

export interface GetDoctorFailAction extends Action {
    payload: {
      error: string;
    };
}

export interface GetDoctorsAction extends Action {
  payload: {
    userId: string;
  };
}

export interface GetDoctorsSuccessAction extends Action {
  payload: {
    doctors: IDoctor[];
  };
}

export interface GetDoctorsFailAction extends Action {
    payload: {
      error: string;
    };
}

const getDoctor = (doctorId: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(doRequest(DoctorActions.GET_DOCTOR));
    const doctor = await doctorService.getDoctor(doctorId);

    dispatch(doSuccess(DoctorActions.GET_DOCTOR_SUCCESS, { doctor }));
    return doctor;
  } catch (error) {
    dispatch(doFailure(DoctorActions.GET_DOCTOR_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
    return error;
  }
};

const getDoctors = () => async (dispatch: Dispatch) => {
  try {
    dispatch(doRequest(DoctorActions.GET_DOCTORS));
    const doctors = await doctorService.getDoctors();

    dispatch(doSuccess(DoctorActions.GET_DOCTORS_SUCCESS, { doctors }));
    return doctors;
  } catch (error) {
    dispatch(doFailure(DoctorActions.GET_DOCTORS_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
    return error;
  }
};

export default {
  getDoctor,
  getDoctors,
};
