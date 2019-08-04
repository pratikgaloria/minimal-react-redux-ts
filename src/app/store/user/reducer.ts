import { IStoreAction, Type } from './actions';

export interface IUserState {
  id: string;
  name: string;
}

export const initialState: IUserState = {
  id: '',
  name: '',
};

function reducer(state: IUserState = initialState, action: IStoreAction): IUserState {
  switch(action.type) {
    case Type.USER_LOGIN:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
      };
    case Type.USER_LOGOUT:
      return {
        ...state,
        id: '',
        name: '',
      };
    default:
      return state;
  }
}

export default reducer;
