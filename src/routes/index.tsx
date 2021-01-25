import React from 'react';

import { Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" isPrivate component={Dashboard} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
