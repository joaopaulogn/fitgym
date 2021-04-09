import React from 'react';
import Container from './style';
import Icon from '../Icon/index';
import toggleCheckbox from './event';

const Checkbox = () => (
  <Container
    htmlFor="checkbox"
    id="label"
    className="label text-small"
    onClick={toggleCheckbox}
  >
    <span
      role="checkbox"
      aria-checked="false"
      aria-labelledby="label"
      tabIndex={0}
      id="checkbox"
      className="checkbox"
    >
      <Icon icon="check_box_outline_blank" />
    </span>
    <span
      role="checkbox"
      aria-checked="false"
      aria-labelledby="label"
      tabIndex={0}
      id="checkbox"
      className="checkbox hidden"
    >
      <Icon icon="check_box" outlined={false} />
    </span>
    Lembrar-me
  </Container>
);

export default Checkbox;
