import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import Container from './style';
import Icon from '../../Icon';

interface OptionProps extends React.LiHTMLAttributes<HTMLLIElement> {
  path: string;
  icon: string;
  text: string;
  handleEvent(event: MouseEvent<HTMLLIElement>): void;
}

export function activateOption(element: HTMLLIElement): void {
  element.classList.add('active');
}

const Option = ({
  path,
  icon,
  text,
  handleEvent,
  ...props
}: OptionProps): JSX.Element => (
  <Container data-option="dashboard" onClick={handleEvent} {...props}>
    <Icon icon={icon} />
    <Link to={path}>{text}</Link>
  </Container>
);

export default Option;
