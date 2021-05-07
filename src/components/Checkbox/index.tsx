import React from 'react';
import Container from './style';
import Icon from '../Icon';

interface CheckboxProps {
  text: string;
}

const Checkbox = ({ text }: CheckboxProps) => {
  function changeState({ currentTarget }: React.MouseEvent) {
    const checkbox = currentTarget.firstElementChild as HTMLSpanElement;

    let state = 'check_box';
    let isChecked = 'true';

    if (checkbox.getAttribute('aria-checked') === 'true') {
      state = 'check_box_outline_blank';
      isChecked = 'false';
    }

    checkbox.innerHTML = state;
    checkbox.setAttribute('aria-checked', isChecked);
    checkbox.classList.remove('material-icons-outlined');
    checkbox.classList.add('material-icons');
  }

  return (
    <Container
      htmlFor="checkbox"
      id="label"
      className="label text-small"
      onClick={changeState}
    >
      <Icon
        icon="check_box_outline_blank"
        role="checkbox"
        aria-checked={false}
        aria-labelledby="label"
        tabIndex={0}
        id="checkbox"
      />
      {text}
    </Container>
  );
};

export default Checkbox;
