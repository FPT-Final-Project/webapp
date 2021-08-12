import { getRequest, postRequest } from '../config/axios.request';

const getQuizzes = (): Promise<any> => getRequest('psytest');

const getQuestions = (quizId: string): Promise<any> => getRequest(`psytest/${quizId}/question`);

const createQuizResult = (userId: string, quizId: string, score: number): Promise<any> => {
  return postRequest(`psytest/${quizId}/result`, { userId, score });
};

const recommendDoctor = (result: any): Promise<any> => {
  return postRequest('psytest/suggestion', { result });
};

export default {
  getQuizzes,
  getQuestions,
  createQuizResult,
  recommendDoctor,
};
