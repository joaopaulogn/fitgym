import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../Icon';
import Container from './style';
import setActiveState from '../../../events/setActiveState';

interface OptionProps extends React.LiHTMLAttributes<HTMLLIElement> {
  path: string;
  icon: string;
  text: string;
}

const Option = ({ path, icon, text, ...props }: OptionProps) => (
  <Container
    data-option="dashboard"
    onClick={(event) => setActiveState(event, '[data-option="dashboard"]')}
    {...props}
  >
    <Icon icon={icon} />
    <Link to={path}>{text}</Link>
  </Container>
);

export default Option;
