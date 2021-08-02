export interface IUser {
  id: string;
  name: string;
  email: string;
  role: string;
  token?: string;
  picture?: string;
  avatar?: string;
  gender?: number;
  phone?: string;
  address?: string;
  job?: string;
  specialist?: string;
  createdAt?: number;
  updatedAt?: number;
}
