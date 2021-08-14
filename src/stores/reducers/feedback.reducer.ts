import { Action } from 'redux';
import { IFeedback } from '../../types/feedback';
import {
  FeedbackActions,
  CreateFeedbackFailAction,
  CreateFeedbackSuccessAction,
} from '../actions/feedback.action';

export interface IFeedbackState {
  feedback?: IFeedback;
  error?: string;
}

const initialState: IFeedbackState = {
  feedback: undefined,
  error: undefined,
};

const feedbackReducer = (state = initialState, action: Action): IFeedbackState => {
  switch (action.type) {
    case FeedbackActions.CREATE_FEEDBACK_SUCCESS: {
      const { feedback } = (action as CreateFeedbackSuccessAction).payload;
      return { ...state, ...{ feedback } };
    }

    case FeedbackActions.CREATE_FEEDBACK_FAIL: {
      const { error } = (action as CreateFeedbackFailAction).payload;
      return { ...state, ...{ error } };
    }

    default: {
      return state;
    }
  }
};

export default feedbackReducer;
