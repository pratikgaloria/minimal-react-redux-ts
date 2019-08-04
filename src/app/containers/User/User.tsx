import * as React from "react";
import { connect } from "react-redux";

import { IUserModel, UserModel } from "app/models/user.model";
import { userLogin, userLogout } from "app/store/user/actions";
import { getUser } from "app/store/user/selectors";
import * as styles from "./User.scss";

interface IStateToProps {
  user: IUserModel;
}

interface IDispatchToProps {
  login: typeof userLogin;
  logout: typeof userLogout;
}

interface IProps extends IStateToProps, IDispatchToProps {}

interface IState {
  name: string;
  hasLoggedIn: boolean;
}

export class UserComponent extends React.Component<IProps, IState> {
  state: IState = {
    name: '',
    hasLoggedIn: false
  };

  handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: event.target.value
    });
  };

  handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    if (this.state.hasLoggedIn) {
      this.setState(
        {
          name: '',
          hasLoggedIn: false
        },
        () => {
          this.props.logout();
        }
      );
    } else {
      this.setState(
        {
          hasLoggedIn: true
        },
        () => {
          this.props.login(
            new UserModel({
              id: '1',
              name: this.state.name
            })
          );
        }
      );
    }
  };

  render() {
    const { hasLoggedIn } = this.state;
    const { user } = this.props;

    return (
      <div className={styles.root}>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <input
            name="name"
            placeholder="Enter Name"
            required
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <button type="submit">{hasLoggedIn ? `Logout` : `Login`}</button>
        </form>
        <div data-component="login-message" className={styles.message}>
          {hasLoggedIn ? `${user.name} has logged in!` : `User has logged out!`}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any): IStateToProps => ({
  user: getUser(state)
});

const mapDispatchToProps: IDispatchToProps = {
  login: userLogin,
  logout: userLogout
};

export default connect<IStateToProps, IDispatchToProps>(
  mapStateToProps,
  mapDispatchToProps
)(UserComponent);
