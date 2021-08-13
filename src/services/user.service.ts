import { getRequest, postRequest, putRequest } from '../config/axios.request';
import { IUser } from '../types/user';

const login = (email: string, password: string): Promise<IUser> => postRequest('auth/login', { email, password });

const register = (id: string, name: string, email: string, password: string, role: string): Promise<IUser> => {
  return postRequest('auth/register', { name, email, password, role, ...(id && { id }) });
};

const getUserProfile = (id: string) => getRequest(`/user/${id}`);
const updateProfile = (values: any): Promise<IUser> => {
  return putRequest('/user/update-profile', { values });
};
const getMe = (): Promise<IUser> => getRequest('/user/getMe') as any;

const uploadAvatar = (body: any): Promise<IUser> => postRequest('/user/uploadSingle', body) as any;

const updateAvatar = (body: any): Promise<IUser> => postRequest('/user/updateAvatar', body) as any;

const changePassword = (newPass: string): Promise<IUser> => {
  return postRequest('/change-password', { newPass });
};

export default {
  login,
  register,
  getUserProfile,
  updateProfile,
  changePassword,
  getMe,
  uploadAvatar,
  updateAvatar,
};
