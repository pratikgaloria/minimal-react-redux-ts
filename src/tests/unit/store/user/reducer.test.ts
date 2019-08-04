import { UserModel } from 'app/models/user.model';
import reducer, { IUserState } from 'app/store/user/reducer';
import { Type } from 'app/store/user/actions';

describe('User reducer.', () => {
  it('Should create the initial state.', () => {
    const state = reducer(undefined, { type: 'UNKNOWN_ACTION' });
    const expectedState: IUserState = {
      id: '',
      name: '',
    };

    expect(state).toEqual(expectedState);
  });

  it('Should create valid state for USER_LOGIN action.', () => {
    const initialState: IUserState = { id: '', name: '' };

    const state = reducer(initialState, {
      type: Type.USER_LOGIN,
      payload: new UserModel({
        id: '1',
        name: 'Pratik'
      }),
    });

    const expectedState: IUserState = {
      id: '1',
      name: 'Pratik',
    };

    expect(state).toEqual(expectedState);
  });

  it('Should create valid state for USER_LOGOUT action.', () => {
    const initialState: IUserState = { id: '1', name: 'Pratik' };

    const state = reducer(initialState, {
      type: Type.USER_LOGOUT,
    });

    const expectedState: IUserState = {
      id: '',
      name: '',
    };

    expect(state).toEqual(expectedState);
  });
});
