import React from 'react';
import Icon from '../Icon';

const ChangeVisibility = () => {
  function changeVisibility({ currentTarget }: React.MouseEvent) {
    const button = currentTarget as HTMLSpanElement;
    const passwordField = currentTarget.previousElementSibling as HTMLInputElement;

    if (passwordField.type === 'password') {
      button.innerHTML = 'visibility';
      passwordField.type = 'text';
      button.setAttribute('aria-pressed', 'true');
    } else {
      button.innerHTML = 'visibility_off';
      passwordField.type = 'password';
      button.setAttribute('aria-pressed', 'false');
    }
  }

  return (
    <Icon
      icon="visibility_off"
      role="button"
      aria-pressed={false}
      className="material-icons-outlined button"
      onClick={changeVisibility}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default ChangeVisibility;
