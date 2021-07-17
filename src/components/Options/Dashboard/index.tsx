import React from 'react';
import { Link } from 'react-router-dom';
import Container from './style';
import Icon from '../../Icon';

interface OptionProps extends React.LiHTMLAttributes<HTMLLIElement> {
  path: string;
  icon: string;
  text: string;
}

function updatePageTitle(element: HTMLLIElement) {
  document.title = (element.children[1] as HTMLAnchorElement).innerText;
}

function activeOption(element: HTMLLIElement) {
  element.classList.add('active');
}

const Option = ({ path, icon, text }: OptionProps) => {
  React.useEffect(() => {
    const { pathname } = window.location;
    const [students, settings, contact] = document.querySelectorAll(
      '[data-option="dashboard"]',
    ) as NodeListOf<HTMLLIElement>;

    if (pathname === '/contato') {
      activeOption(contact);
      updatePageTitle(contact);
    } else if (pathname.startsWith('/perfil')) {
      activeOption(settings);
      updatePageTitle(settings);
    } else {
      activeOption(students);
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
