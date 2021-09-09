import React, { Fragment } from 'react';
import Icon from '../Icon';
import Container from './style';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  path: string;
  text: string;
  icon?: string;
  position?: 'left' | 'right';
}

const Link = ({
  path,
  text,
  icon,
  position,
  ...props
}: LinkProps): JSX.Element => (
  <Container
    href={path}
    className={`button text-normal ${position}`}
    {...props}
  >
    <Icon icon={icon} />
    {text}
  </Container>
);

Link.defaultProps = {
  icon: Fragment,
  position: 'left',
};

export default Link;
