import React, { ReactElement } from 'react';
import Container from './style';
import Icon from '../Icon';

interface DataProps {
  roleText: string;
  children: ReactElement | string | undefined;
}

const Data = ({ roleText, children }: DataProps) => (
  <Container className="data text-normal">
    <div className="role">
      <span>{roleText}</span>
      <Icon icon="chevron_right" />
    </div>

    {typeof children === 'string' ? (
      <span className="content">{children}</span>
    ) : (
      <div className="content">{children}</div>
    )}
  </Container>
);

export default Data;
