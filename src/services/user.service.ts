import { postRequest } from '../config/axios.request';

const login = (email: string, password: string) => postRequest('auth/login', { email, password });

const register = (name: string, email: string, password: string, role: string) => postRequest('auth/register', { name, email, password, role });

export default {
  login,
  register,
};
