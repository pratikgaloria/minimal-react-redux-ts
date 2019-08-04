import { IUserModel } from 'app/models/user.model';

export const getUser = (state: any): IUserModel => state.user;
