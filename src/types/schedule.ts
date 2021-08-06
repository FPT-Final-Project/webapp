export interface ISchedule {
    _id: string;
    doctorId: string;
    fromTime: number;
    toTime: number;
    status: string;
    createdAt?: number;
    updatedAt?: number;
  }
