import React, { ButtonHTMLAttributes } from 'react';
import Container from './style';

interface IconProps extends ButtonHTMLAttributes<HTMLSpanElement> {
  icon: string | undefined;
  outlined?: boolean;
}

const Icon = ({ icon, outlined, ...props }: IconProps) => (
  <Container
    className={`material-icons${!outlined ? '' : '-outlined'} icon`}
    {...props}
  >
    {icon}
  </Container>
);

Icon.defaultProps = {
  outlined: true,
};

export default Icon;
