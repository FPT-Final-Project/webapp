import { getRequest, postRequest } from '../config/axios.request';
import { IQuestionAnswerState } from '../stores/reducers/questionAnswer.reducer';

const askNewQuestion = (description: string): Promise<any> => postRequest('questions/ask', { description }) as any;

const getPostsQuestion = (): Promise<IQuestionAnswerState> => getRequest('questions') as any;

const getOwnerQuestion = (): Promise<IQuestionAnswerState> => getRequest('questions/ownerQuestion') as any;

const getComments = (questionId: string) => getRequest(`questions/${questionId}/comments`);

const postComment = (questionId: string, description: string) => postRequest(`/questions/${questionId}/comments`, { description }) as any;
export default {
  getPostsQuestion,
  getComments,
  getOwnerQuestion,
  askNewQuestion,
  postComment,
};
