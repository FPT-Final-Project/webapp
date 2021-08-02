import { Action } from 'redux';
import {
  GetPostsSuccessAction,
  GetCommentsSuccessAction,
  QuestionAnswerActions,
} from '../actions/questionAnswer.action';

export interface IQuestionAnswerState {
  posts: any[] | undefined;
  comments: any[] | undefined;
}

const initialState: IQuestionAnswerState = {
  posts: undefined,
  comments: undefined,
};

export const questionAnswerReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case QuestionAnswerActions.GET_POSTS_SUCCESS: {
      const { posts } = (action as GetPostsSuccessAction).payload;
      return { ...state, ...{ posts } };
    }

    case QuestionAnswerActions.GET_COMMENTS_SUCCESS: {
      const { comments } = (action as GetCommentsSuccessAction).payload;
      return { ...state, ...{ comments } };
    }

    default: {
      return state;
    }
  }
};

export default questionAnswerReducer;
