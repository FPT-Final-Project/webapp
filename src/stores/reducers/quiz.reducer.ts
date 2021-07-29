import { Action } from 'redux';
import { IQuestion } from '../../types/question';
import { IQuiz } from '../../types/quiz';
import {
  GetQuestionsFailAction,
  GetQuestionsSuccessAction,
  GetQuizzesFailAction,
  GetQuizzesSuccessAction,
  QuizActions,
} from '../actions/quiz.action';

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

export const quiz = (state = initialState, action: Action) => {
  switch (action.type) {
    case QuizActions.GET_QUIZZES_SUCCESS: {
      const { quizzes } = (action as GetQuizzesSuccessAction).payload;
      return { ...state, ...{ quizzes } };
    }

    case QuizActions.GET_QUIZZES_FAIL: {
      const { error } = (action as GetQuizzesFailAction).payload;
      return { ...state, ...{ error } };
    }

    case QuizActions.GET_QUESTIONS_SUCCESS: {
      const { questions } = (action as GetQuestionsSuccessAction).payload;
      return { ...state, ...{ questions } };
    }

    case QuizActions.GET_QUESTIONS_FAIL: {
      const { error } = (action as GetQuestionsFailAction).payload;
      return { ...state, ...{ error } };
    }

    default: {
      return state;
    }
  }
};
