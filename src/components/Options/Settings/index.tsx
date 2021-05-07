import React, { LiHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import Container from './style';
import Icon from '../../Icon';
import setActiveState from '../../../events/setActiveState';

interface OptionProps extends LiHTMLAttributes<HTMLLIElement> {
  path: string;
  text: string;
}

const Option = ({ path, text, ...props }: OptionProps) => (
  <Container {...props}>
    <Link
      to={path}
      data-option="settings"
      onClick={(event) => setActiveState(event, '[data-option="settings"]')}
    >
      <Icon icon="person" />
      {text}
    </Link>
  </Container>
);

export default Option;
