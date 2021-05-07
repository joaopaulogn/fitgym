import React from 'react';
import Container from './style';
import Name from './Data/Name';
import Email from './Data/Email';
import Phone from './Data/Phone';
import RepeatTime from './Data/RepeatTime';

const Student = () => (
  <Container className="text-normal">
    <Name />
    <Email />
    <Phone />
    <RepeatTime />
  </Container>
);

export default Student;
