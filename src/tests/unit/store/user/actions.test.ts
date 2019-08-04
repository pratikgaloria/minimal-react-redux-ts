import { UserModel } from 'app/models/user.model';
import { Type, userLogin, userLogout } from 'app/store/user/actions';

describe('User actions.', () => {
  it('Should create an action to login user', () => {
    const user = new UserModel({
      id: '1',
      name: 'Pratik',
    });
    const expectedAction = {
      type: Type.USER_LOGIN,
      payload: user,
    }

    expect(userLogin(user)).toEqual(expectedAction)
  });

  it('Should create an action to logout user', () => {
    const expectedAction = {
      type: Type.USER_LOGOUT,
    }

    expect(userLogout()).toEqual(expectedAction)
  });
});
