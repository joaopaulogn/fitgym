import React from 'react';
import { Link } from 'react-router-dom';
import Container from './style';
import Icon from '../../Icon';

interface OptionProps extends React.LiHTMLAttributes<HTMLLIElement> {
  path: string;
  icon: string;
  text: string;
}

const Option = ({ path, icon, text }: OptionProps) => {
  React.useEffect(() => {
    const { pathname } = window.location;
    const [students, settings, contact] = document.querySelectorAll(
      '[data-option="dashboard"]',
    ) as NodeListOf<HTMLLIElement>;

    function updatePageTitle(element: HTMLLIElement) {
      document.title = (element.children[1] as HTMLAnchorElement).innerText;
    }

    if (pathname === '/contato') {
      contact.classList.add('active');
      updatePageTitle(contact);
    } else if (pathname.startsWith('/perfil')) {
      settings.classList.add('active');
      updatePageTitle(settings);
    } else {
      students.classList.add('active');
      updatePageTitle(students);
    }
  });

  return (
    <Container data-option="dashboard">
      <Icon icon={icon} />
      <Link to={path}>{text}</Link>
    </Container>
  );
};

export default Option;
