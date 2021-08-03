import { Action } from 'redux';

export const doRequest = (type: string, payload?: any) => ({
  type,
  payload,
});

export const doSuccess = (type: string, payload: any) => ({
  type,
  payload,
});

export const doFailure = (type: string, payload: { error?: any }) => ({
  type,
  payload,
});

export interface FailAction extends Action {
  payload: {
    error: string;
  };
}
