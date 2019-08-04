import { IUserModel } from 'app/models/user.model';

export interface IStoreAction {
  type: string;
  payload?: any;
}

export enum Type {
  USER_LOGIN = 'USER_LOGIN',
  USER_LOGOUT = 'USER_LOGOUT',
}

export const userLogin = (payload: IUserModel): IStoreAction => ({
  type: Type.USER_LOGIN,
  payload,
});

export const userLogout = (): IStoreAction => ({
  type: Type.USER_LOGOUT,
});

export default {
  userLogin,
  userLogout,
};
