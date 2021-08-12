import { getRequest, postRequest } from '../config/axios.request';
import { IQuestionAnswerState } from '../stores/reducers/questionAnswer.reducer';

const askNewQuestion = (description: string): Promise<any> => postRequest('questions/ask', { description });

const getPostsQuestion = (): Promise<IQuestionAnswerState> => getRequest('questions');

const getOwnerQuestion = (): Promise<IQuestionAnswerState> => getRequest('questions/ownerQuestion');

const getComments = (questionId: string): Promise<any> => getRequest(`questions/${questionId}/comments`);

const postComment = (questionId: string, description: string): Promise<any> => {
  return postRequest(`/questions/${questionId}/comments`, { description });
};

export default {
  getPostsQuestion,
  getComments,
  getOwnerQuestion,
  askNewQuestion,
  postComment,
};
