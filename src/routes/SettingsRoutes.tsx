import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from '../components/Section/Profile';
import Edit from '../components/Section/Edit';
import ResetPassword from '../components/Section/ResetPassword';

interface SettingsRouteProps {
  profile: string;
  edit: string;
  resetPassword: string;
}

const SettingsRoutes = ({
  profile,
  edit,
  resetPassword,
}: SettingsRouteProps) => (
  <Switch>
    <Route exact path={profile}>
      <Profile />
    </Route>
    <Route path={edit}>
      <Edit />
    </Route>
    <Route exact path={resetPassword}>
      <ResetPassword />
    </Route>
  </Switch>
);

export default SettingsRoutes;
