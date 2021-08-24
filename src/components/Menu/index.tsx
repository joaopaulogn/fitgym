import React, { useEffect } from 'react';
import DashboardMenu from './view';
import useAuthContext from '../../contexts/auth';
import { activateOption } from '../Option/Dashboard/view';

const DashboardMenuContainer = () => {
  const { signOut } = useAuthContext();
  const { pathname } = window.location;

  useEffect(() => {
    const [students, profile, contact] = document.querySelectorAll(
      '[data-option="dashboard"]',
    ) as NodeListOf<HTMLLIElement>;

    switch (pathname) {
      case '/perfil': {
        activateOption(profile);
        break;
      }
      case '/contato': {
        activateOption(contact);
        break;
      }
      default: {
        activateOption(students);
      }
    }
  }, [pathname]);

  function handleLogout(event: React.MouseEvent): void {
    event.preventDefault();

    signOut();
  }

  return <DashboardMenu handleLogout={handleLogout} />;
};

export default DashboardMenuContainer;
