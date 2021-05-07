import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from '../components/Section/Profile';
import Edit from '../components/Section/Edit';
import ResetPassword from '../components/Section/ResetPassword';

interface SettingsRouteProps {
  profile: string;
  edit: string;
  password: string;
}

const SettingsRoutes = ({ profile, edit, password }: SettingsRouteProps) => (
  <Switch>
    <Route exact path={profile}>
      <Profile />
    </Route>
    <Route path={edit}>
      <Edit />
    </Route>
    <Route path={password}>
      <ResetPassword />
    </Route>
  </Switch>
);

export default SettingsRoutes;
