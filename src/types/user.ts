export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  token?: string;
  picture?: string;
  avatar?: string;
  gender?: string;
  phone?: string;
  address?: string;
  job?: string;
  major?: string;
  consultingFee?: number;
  bookingTime?: any[];
  createdAt?: number;
  updatedAt?: number;
  password?:string;
}
