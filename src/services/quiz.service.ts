import { getRequest, postRequest } from '../config/axios.request';

const getQuizzes = () => getRequest('psytest');

const getQuestions = (quizId: string) => getRequest(`psytest/${quizId}/question`);

const createQuizResult = (userId: string, quizId: string, score: number) => {
  return postRequest(`psytest/${quizId}/result`, { userId, score });
};

// const getQuizResult = (quizId: string) => getRequest('/psytest/');

export default {
  getQuizzes,
  getQuestions,
  createQuizResult,
};
