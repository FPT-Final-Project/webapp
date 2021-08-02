import { getRequest } from '../config/axios.request';

const getPosts = () => getRequest('');

const getComments = () => getRequest('');

export default {
  getPosts,
  getComments,
};
