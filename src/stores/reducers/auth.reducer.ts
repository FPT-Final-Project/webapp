import { Action } from 'redux';
import { AuthActions } from '../actions/auth.action';

interface UserState {
  user?: {
    _id: string;
    name: string;
    email: string;
    phone: string;
    password: string;
  },
  i: number;
}

const initialState: UserState = {
  user: undefined,
  i: 0,
};

export const authReducer = (state = initialState, action: Action): UserState => {
  switch (action.type) {
    case AuthActions.LOGIN: {
      return { ...state, ...{ i: 1 } };
    }

    case AuthActions.LOGOUT: {
      return { ...state, ...{ i: 2 } };
    }

    case AuthActions.REGISTER: {
      return { ...state, ...{ i: 3 } };
    }

    default: {
      return state;
    }
  }
};
