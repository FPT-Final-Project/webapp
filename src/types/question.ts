export interface IAnswer {
  _id: string;
  text: string;
  mark: number;
}

export interface IQuestion {
  _id: string;
  psyTestId: string;
  questionText: string;
  alternatives: IAnswer[];
  createdAt?: number;
  updatedAt?: number;
}
