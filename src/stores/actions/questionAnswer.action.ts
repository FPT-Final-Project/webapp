import { Action, Dispatch } from 'redux';
import _ from 'lodash';
import { doRequest, doSuccess, doFailure } from './utils';
import questionAnswerService from '../../services/questionAnswer.service';

export const QuestionAnswerActions = {
  GET_POSTS: '[Post] Get Posts',
  GET_POSTS_SUCCESS: '[Post] Get Posts Success',
  GET_POSTS_FAIL: '[Post] Get Posts Fail',

  GET_COMMENTS: '[Post] Get Comments',
  GET_COMMENTS_SUCCESS: '[Post] Get Comments Success',
  GET_COMMENTS_FAIL: '[Post] Get Comments Fail',
};

export interface GetPostsSuccessAction extends Action {
  payload: {
    posts: any[];
  };
}

export interface GetPostsAction extends Action {
  payload: {
    posts: string;
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
    dispatch(doRequest(QuestionAnswerActions.GET_POSTS, {}));
    const posts = await questionAnswerService.getPosts();
    dispatch(doSuccess(QuestionAnswerActions.GET_POSTS_SUCCESS, { posts }));
  } catch (error) {
    dispatch(doFailure(QuestionAnswerActions.GET_POSTS_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
  }
};

const getComments = () => async (dispatch: Dispatch) => {
  try {
    dispatch(doRequest(QuestionAnswerActions.GET_COMMENTS, {}));
    const posts = await questionAnswerService.getComments();
    dispatch(doSuccess(QuestionAnswerActions.GET_COMMENTS_SUCCESS, { posts }));
  } catch (error) {
    dispatch(doFailure(QuestionAnswerActions.GET_COMMENTS_FAIL, { error: _.get(error, ['response', 'data', 'message']) }));
  }
};

export default {
  getPosts,
  getComments,
};
