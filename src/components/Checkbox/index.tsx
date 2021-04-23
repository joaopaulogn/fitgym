import React from 'react';
import Container from './style';
import Icon from '../Icon';
import changeState from './events/changeState';

interface CheckboxProps {
  text: string;
}

const Checkbox = ({ text }: CheckboxProps) => (
  <Container
    htmlFor="checkbox"
    id="label"
    className="label text-small"
    onClick={changeState}
  >
    <Icon
      icon="check_box_outline_blank"
      role="checkbox"
      aria-checked="false"
      aria-labelledby="label"
      tabIndex={0}
      id="checkbox"
    />
    {text}
  </Container>
);
export default Checkbox;
