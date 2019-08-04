import { IUserModel } from 'app/models/user.model';
import { getUser } from 'app/store/user/selectors';

describe('User selectors.', () => {
  it('getUser returns valid object from the state', () => {
    const state: any = {
      user: {
        id: '1',
        name: 'Pratik',
      },
    };

    const actualObject = getUser(state);
    const expectedObject: IUserModel = {
      id: '1',
      name: 'Pratik',
    }
    expect(actualObject).toEqual(expectedObject);
  });
});
