import React, { LiHTMLAttributes } from 'react';
import { NavLink } from 'react-router-dom';
import Container from './style';
import Icon from '../../Icon';

interface OptionProps extends LiHTMLAttributes<HTMLLIElement> {
  path: string;
  exact?: boolean;
  text: string;
}

const Option = ({ path, exact, text }: OptionProps) => (
  <Container>
    <NavLink exact={exact} to={path} data-option="settings">
      <Icon icon="person" />
      {text}
    </NavLink>
  </Container>
);

Option.defaultProps = {
  exact: false,
};

export default Option;
