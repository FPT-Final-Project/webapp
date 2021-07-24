export interface IUser {
  _id: string,
  name: string,
  email: string,
  role: string,
  token: string,
  avatar?: string,
  gender?: number,
  phone?: string,
  address?: string,
  job?: string,
}
