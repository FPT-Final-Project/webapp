import { postRequest } from '../config/axios.request';

const login = (email: string, password: string) => postRequest('auth/login', { email, password });

const register = (id: string, name: string, email: string, password: string, role: string) => {
  return postRequest('auth/register', { id, name, email, password, role });
};

export default {
  login,
  register,
};
