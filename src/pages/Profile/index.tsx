import React, { useEffect, useState } from 'react';
import useAuthContext from '../../contexts/auth';
import UserRepository from '../../repositories/UserRepository';
import Profile from './view';

const ProfileContainer = (): JSX.Element => {
  const { user } = useAuthContext();
  const [passwordView, setPasswordView] = useState('');

  useEffect(() => {
    (async function fetchUserPassword(): Promise<void> {
      const userRepository: UserRepository = new UserRepository(user?.id);
      const password = await userRepository.getPassword();

      setPasswordView(password);
    })();
  });

  return <Profile passwordValue={passwordView} />;
};

export default ProfileContainer;
