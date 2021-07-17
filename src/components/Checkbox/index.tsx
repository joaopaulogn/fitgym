import React from 'react';
import Container from './style';
import Input from '../Input';

interface CheckboxProps {
  text: string;
}

const Checkbox = ({ text }: CheckboxProps) => (
  <Container
    htmlFor="checkbox"
    id="label"
    className="label text-small"
  >
    <Input type="checkbox" name="checkbox" id="checkbox" />
    <div className="checkbox">
      <span className="material-icons-outlined" />
    </div>
    <span className="text">{text}</span>
  </Container>
);

export default Checkbox;
