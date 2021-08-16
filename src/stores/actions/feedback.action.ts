/* eslint-disable max-len */
import { Action, Dispatch } from 'redux';
import _ from 'lodash';
import feedbackService from '../../services/feedback.service';
import { IFeedback } from '../../types/feedback';
import { doFailure, doRequest, doSuccess } from './utils';
import { IUser } from '../../types/user';
import openNotification from '../../utils/notification';

export const FeedbackActions = {
  CREATE_FEEDBACK: '[Feedback] Create Feedback',
  CREATE_FEEDBACK_SUCCESS: '[Feedback] Create Feedback Success',
  CREATE_FEEDBACK_FAIL: '[Feedback] Create Feedback Fail',
};

export interface CreateFeedbackSuccessAction extends Action {
  payload: {
    feedback: IFeedback;
  };
}

export interface CreateFeedbackFailAction extends Action {
    payload: {
      error: string;
    };
}

const createFeedback = (appointmentId: any, rate: any, description: any, patientId: any, doctorId: any) => async (dispatch: Dispatch) : Promise<any> => {
  try {
    dispatch(doRequest(FeedbackActions.CREATE_FEEDBACK));
    const feedback = await feedbackService.createFeedback(appointmentId, rate, description, patientId, doctorId);

    dispatch(doSuccess(FeedbackActions.CREATE_FEEDBACK_SUCCESS, { feedback }));
    openNotification('success', 'Thanks for your feedback ! Your feedback has been noted, we will try to bring you a better experience');
    return feedback;
  } catch (error) {
    dispatch(doFailure(FeedbackActions.CREATE_FEEDBACK_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
    openNotification('error', 'You have already feedback this appointment !');
    return error;
  }
};

export default {
  createFeedback,
};
