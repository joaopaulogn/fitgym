import React, { ButtonHTMLAttributes } from 'react';
import Container from './style';

interface IconProps extends ButtonHTMLAttributes<HTMLSpanElement> {
  icon: string | undefined;
  filled?: boolean;
}

const Icon = ({ icon, filled, ...props }: IconProps): JSX.Element => (
  <Container
    className={`material-icons${!filled ? '-outlined' : ''} icon`}
    {...props}
  >
    {icon}
  </Container>
);

Icon.defaultProps = {
  filled: false,
};

export default Icon;
