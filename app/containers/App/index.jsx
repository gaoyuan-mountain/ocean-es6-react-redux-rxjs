import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Router from 'modules/ReduxRouter';
import RedirectPublic from 'modules/RedirectPublic';
import RedirectProtected from 'modules/RedirectProtected';

import Task from 'containers/Task';
import Login from 'containers/Login';
import NotFound from 'containers/NotFound';

import Loader from 'components/Loader';
import Header from 'components/Header';

import '../../styles/style.less';
import './style.less';

export class App extends React.Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    router: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };

  render() {
    const { app, dispatch, router, user } = this.props;
    let html = (
      <Router dispatch={dispatch} router={router}>
        <div key="app" className="app">
          <main className="app-main">
            <Switch>
              <Route exact path="/" component={Login} />
              <RedirectPublic
                component={Login}
                isAuthenticated={user.isAuthenticated}
                path="/login"
                exact
              />
              <RedirectProtected
                component={Task}
                isAuthenticated={user.isAuthenticated}
                path="/task"
                exact
              />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </Router>
    );

    return html;
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
    router: state.router,
    user: state.user
  };
}

export  default connect(mapStateToProps)(App);
