export interface IUserModel {
  id: string;
  name: string;
}

export class UserModel {
  id: string;
  name: string;

  constructor(user: IUserModel) {
    this.id = user.id;
    this.name = user.name;
  }
}
