import React from 'react';
import Container from './style';

interface HeadingProps {
  children: string | Array<string>;
}

const Heading = ({ children }: HeadingProps): JSX.Element => (
  <Container className="heading">
    {typeof children === 'string' ? (
      children
    ) : (
      <>
        <span className="heading--main">{children[0]}</span>
        <span className="heading--sub">{children[1]}</span>
      </>
    )}
  </Container>
);

export default Heading;
