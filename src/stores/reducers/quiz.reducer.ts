import { Action } from 'redux';
import { IQuestion } from '../../types/question';
import { IQuiz } from '../../types/quiz';
import {
  GetQuestionsSuccessAction,
  GetQuizzesSuccessAction,
  QuizActions,
} from '../actions/quiz.action';
import { FailAction } from '../actions/utils';

export interface IQuizState {
  quizzes: IQuiz[] | undefined;
  questions: IQuestion[] | undefined;
  quiz: IQuiz | undefined;
  error: string | undefined;
}

const initialState: IQuizState = {
  quizzes: undefined,
  quiz: undefined,
  questions: undefined,
  error: undefined,
};

const quizReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case QuizActions.GET_QUIZZES_SUCCESS: {
      const { quizzes } = (action as GetQuizzesSuccessAction).payload;
      return { ...state, ...{ quizzes } };
    }

    case QuizActions.GET_QUIZZES_FAIL: {
      const { error } = (action as FailAction).payload;
      return { ...state, ...{ error } };
    }

    case QuizActions.GET_QUESTIONS_SUCCESS: {
      const { questions } = (action as GetQuestionsSuccessAction).payload;
      return { ...state, ...{ questions } };
    }

    case QuizActions.GET_QUESTIONS_FAIL: {
      const { error } = (action as FailAction).payload;
      return { ...state, ...{ error } };
    }

    default: {
      return state;
    }
  }
};

export default quizReducer;
