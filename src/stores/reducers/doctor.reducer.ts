import { Action } from 'redux';
import { IDoctor } from '../../types/doctor';
import { DoctorActions, GetDoctorSuccessAction, GetDoctorFailAction, GetDoctorsSuccessAction, GetDoctorsFailAction } from '../actions/doctor.action';

export interface IDoctorState {
  doctor?: IDoctor;
  doctors?: IDoctor[];
  error?: string;
}

const initialState: IDoctorState = {
  doctor: undefined,
  doctors: undefined,
  error: undefined,
};

const doctorReducer = (state = initialState, action: Action): IDoctorState => {
  switch (action.type) {
    case DoctorActions.GET_DOCTOR_SUCCESS: {
      const { doctor } = (action as GetDoctorSuccessAction).payload;
      return { ...state, ...{ doctor } };
    }

    case DoctorActions.GET_DOCTOR_FAIL: {
      const { error } = (action as GetDoctorFailAction).payload;
      return initialState;
    }

    case DoctorActions.GET_DOCTORS_SUCCESS: {
      const { doctors } = (action as GetDoctorsSuccessAction).payload;
      return { ...state, ...{ doctors } };
    }

    case DoctorActions.GET_DOCTORS_FAIL: {
      const { error } = (action as GetDoctorsFailAction).payload;
      return { ...state, ...{ error } };
    }

    default: {
      return state;
    }
  }
};

export default doctorReducer;
