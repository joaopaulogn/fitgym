import React from 'react';
import Container from './style';
import Input from '../Input';

interface CheckboxProps {
  text: string;
}

const Checkbox = ({ text }: CheckboxProps) => {
  function saveState() {
    const emailField = document.getElementById('email') as HTMLInputElement;
    const passwordField = document.getElementById(
      'password',
    ) as HTMLInputElement;

    emailField.setAttribute('autocomplete', 'on');
    passwordField.setAttribute('autocomplete', 'on');
    localStorage.setItem('autoComplete', 'on');
  }

  return (
    <Container
      htmlFor="checkbox"
      id="label"
      className="label text-small"
      onClick={saveState}
    >
      <Input type="checkbox" name="checkbox" id="checkbox" />
      <div className="checkbox">
        <span className="material-icons-outlined" />
      </div>
      <span className="text">{text}</span>
    </Container>
  );
};

export default Checkbox;
