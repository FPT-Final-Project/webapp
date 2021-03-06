export interface IDoctor {
  _id: string;
  name: string;
  email: string;
  avatar? : string;
  gender? : number;
  phone? : string;
  address? : string;
  major? : string;
  consultingFee?: number;
  bookingTime?: string[];
}
