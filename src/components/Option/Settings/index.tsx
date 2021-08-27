import React, { LiHTMLAttributes } from 'react';
import { NavLink } from 'react-router-dom';
import Container from './style';
import Icon from '../../Icon';

interface OptionProps extends LiHTMLAttributes<HTMLLIElement> {
  path: string;
  exact?: boolean;
  text: string;
  icon: string;
}

const Option = ({ path, exact, text, icon }: OptionProps): JSX.Element => (
  <Container>
    <NavLink exact={exact} to={path} data-option="settings">
      <Icon icon={icon} />
      {text}
    </NavLink>
  </Container>
);

Option.defaultProps = {
  exact: false,
};

export default Option;
