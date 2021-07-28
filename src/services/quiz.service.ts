import { getRequest, postRequest } from '../config/axios.request';

const getQuizzes = () => getRequest('psytest');

const getQuestions = (quizId: string) => getRequest(`psytest/${quizId}/question`);

const getQuizResult = (quizId: string) => postRequest(`psytest/${quizId}/result`);

export default {
  getQuizzes,
  getQuestions,
  getQuizResult,
};
