import React from 'react';
import Container from './style';

interface HeadingProps {
  children: string | Array<string>;
}

const Heading = ({ children }: HeadingProps) => (
  <Container className="heading">
    {children.constructor.name === 'String' ? (
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
