import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import { login } from 'actions';

import './style.less';

class Login extends React.PureComponent {
  @autobind
  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(login(this.refs.username.value, this.refs.password.value));
  }

  render() {
    return (
      <div key="login" className="app-login">
        <div className="banner" />
        <div className="main">
          <form name="loginForm" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input required className="form-control" type="text" placeholder="Username" ref="username" />
            </div>
            <div className="form-group">
              <input required className="form-control" type="password" placeholder="Password" ref="password" />
            </div>
            <div className="form-group">
              <input type="submit" className="btn-line-green" value="Sign In" />
            </div>
          </form>
        </div>
      </div>
    );
  }
};

Login.propTypes = {
  location: PropTypes.object.isRequired
};

export default connect()(Login);