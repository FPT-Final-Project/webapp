export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  picture?: string;
  token?: string;
  avatar?: string;
  gender?: number;
  phone?: string;
  address?: string;
  job?: string;
  specialist?: string;
  createdAt?: number;
  updatedAt?: number;
}
