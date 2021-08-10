import { Action, Dispatch } from 'redux';
import _ from 'lodash';
import { doRequest, doSuccess, doFailure } from './utils';
import questionAnswerService from '../../services/questionAnswer.service';
import { IQuestionAnswerState } from '../reducers/questionAnswer.reducer';

export const QuestionAnswerActions = {
  GET_POSTS: '[Post] Get Posts',
  GET_POSTS_SUCCESS: '[Post] Get Posts Success',
  GET_POSTS_FAIL: '[Post] Get Posts Fail',

  GET_OWNER_POSTS: '[Post] Get Owner Posts',
  GET_OWNER_POSTS_SUCCESS: '[Post] Get Owner Posts Success',
  GET_OWNER_POSTS_FAIL: '[Post] Get Owner Posts Fail',

  GET_COMMENTS: '[Post] Get Comments',
  GET_COMMENTS_SUCCESS: '[Post] Get Comments Success',
  GET_COMMENTS_FAIL: '[Post] Get Comments Fail',
};

export interface GetPostsSuccessAction extends Action {
  payload: {
    posts: IQuestionAnswerState;
  };
}

export interface GetPostsAction extends Action {
  payload: {
    posts: IQuestionAnswerState;
  }
}

export interface GetCommentsSuccessAction extends Action {
  payload: {
    comments: any[];
  };
}

export interface GetCommentsAction extends Action {
  payload: {
    comments: string;
  };
}

const getPosts = () => async (dispatch: Dispatch) => {
  try {
    dispatch(doRequest(QuestionAnswerActions.GET_POSTS));
    const posts = await questionAnswerService.getPostsQuestion();
    dispatch(doSuccess(QuestionAnswerActions.GET_POSTS_SUCCESS, { posts }));
    return posts;
  } catch (error) {
    dispatch(doFailure(QuestionAnswerActions.GET_POSTS_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
    return error;
  }
};

const getOwnerPost = () => async (dispatch: Dispatch) => {
  try {
    dispatch(doRequest(QuestionAnswerActions.GET_OWNER_POSTS));
    const posts = await questionAnswerService.getOwnerQuestion();
    dispatch(doSuccess(QuestionAnswerActions.GET_OWNER_POSTS_SUCCESS, { posts }));
    return posts;
  } catch (error) {
    dispatch(doFailure(QuestionAnswerActions.GET_OWNER_POSTS_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
    return error;
  }
};

const getComments = (questionId: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(doRequest(QuestionAnswerActions.GET_COMMENTS, {}));
    const comments = await questionAnswerService.getComments(questionId);
    dispatch(doSuccess(QuestionAnswerActions.GET_COMMENTS_SUCCESS, { comments }));
  } catch (error) {
    dispatch(doFailure(QuestionAnswerActions.GET_COMMENTS_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
  }
};

export default {
  getPosts,
  getComments,
  getOwnerPost,
};
