import { postRequest } from '../config/axios.request';
import { IUser } from '../types/user';

const login = (email: string, password: string): Promise<IUser> => postRequest('auth/login', { email, password }) as any;

const register = (id: string, name: string, email: string, password: string, role: string): Promise<IUser> => {
  return postRequest('auth/register', { name, email, password, role, ...(id && { id }) }) as any;
};

export default {
  login,
  register,
};
