import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { login } from 'actions';
import { NavLink } from 'react-router-dom';

const onClickLogin = dispatch =>
  e => {
    e.preventDefault();

    dispatch(login());
  };

const Header = ({ dispatch, user }) =>
  (<header className="app-header">
    <div className="app-container">
      <ul className="app-header-menu">
        <li>
          <NavLink
              to="/"
              className="app-header-link"
              activeClassName="is-active"
              exact
            >
              Home
            </NavLink>
        </li>
        <li>
          <NavLink
            to="/private"
            className="app__header__link"
            activeClassName="is-active"
          >
            Private
          </NavLink>
        </li>
        <li>
          <a onClick={onClickLogin(dispatch)}>Login</a>
        </li>
      </ul>
    </div>
  </header>);

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default Header;
