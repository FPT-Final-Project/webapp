import { postRequest } from '../config/axios.request';
import { IUser } from '../types/user';

const login = (email: string, password: string): Promise<IUser> => postRequest('auth/login', { email, password }) as any;

const register = (id: string, name: string, email: string, password: string, role: string): Promise<IUser> => {
  return postRequest('auth/register', { name, email, password, role, ...(id && { id }) }) as any;
};

const updateProfile = (
  id: string,
  name: string,
  job: string,
  gender: string,
  phone: string,
  address: string,
  avatar: string,
  specialist: string,
): Promise<IUser> => {
  return postRequest(`user/${id}`, { id, name, job, gender, phone, address, avatar, specialist }) as any;
};

const changePassword = (newPass: string): Promise<IUser> => {
  return postRequest('/change-password', { newPass }) as any;
};

export default {
  login,
  register,
  updateProfile,
  changePassword,
};
