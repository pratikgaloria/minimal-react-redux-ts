import * as React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import User, { UserComponent } from 'app/containers/User/User';

describe('User component.', () => {
  const mockStore = configureStore();
  let store: any;
  let shallowWrapper: any;

  beforeAll(() => {
    store = mockStore({
      user: {
        id: '',
        name: '',
      }
    });

    shallowWrapper = shallow(
      <UserComponent
        login={jest.fn()}
        logout={jest.fn()}
        user={{ id: '', name: '' }}
      />
    );
  });

  it('Should be rendered.', () => {
    const Component = (props: any) => <User {...props} />;

    const wrapper = mount(
      <Provider store={store}>
        <Component />
      </Provider>
    );

    const component = wrapper.find(User);
    expect(component.length).toBe(1);
  });

  it('Should dispatch login prop when user types name and clicks on Login button', () => {
    const mockLoginFn = jest.fn();

    shallowWrapper.setProps({
      login: mockLoginFn,
    });

    shallowWrapper.find('input').simulate('change', { target: { value: 'Pratik' } });
    shallowWrapper.find('form').simulate('submit', { preventDefault: jest.fn() });

    expect(mockLoginFn.mock.calls.length).toBe(1);
    expect(mockLoginFn.mock.calls[0][0]).toEqual({ id: '1', name: 'Pratik' });
  });

  it('Should dispatch logout prop when user was logged in and clicks on Logout button', () => {
    const mockLogoutFn = jest.fn();

    shallowWrapper.setProps({
      user: { id: '1', name: 'Pratik' },
      logout: mockLogoutFn,
    });

    shallowWrapper.setState({ hasLoggedIn: true });

    const loginMessage = shallowWrapper.find('[data-component="login-message"]');
    expect(loginMessage.text()).toBe('Pratik has logged in!');

    shallowWrapper.find('form').simulate('submit', { preventDefault: jest.fn() });

    expect(shallowWrapper.state('hasLoggedIn')).toBeFalsy();
    expect(mockLogoutFn.mock.calls.length).toBe(1);
  });
});
