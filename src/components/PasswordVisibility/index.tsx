import React, { useState, MouseEvent } from 'react';
import VisibilityState from '../../enums/PasswordVisibility';
import Visibility from './view';

const PasswordVisibilityContainer = (): JSX.Element => {
  const [state, setState] = useState<VisibilityState>(VisibilityState.OFF);

  function changeTextVisibility({
    currentTarget,
  }: MouseEvent<HTMLSpanElement>): void {
    const button = currentTarget;
    const passwordField = currentTarget.parentElement
      ?.firstElementChild as HTMLInputElement;

    if (passwordField.type === 'password') {
      setState(VisibilityState.ON);
      passwordField.type = 'text';
      button.setAttribute('aria-pressed', 'true');
    } else {
      setState(VisibilityState.OFF);
      passwordField.type = 'password';
      button.setAttribute('aria-pressed', 'false');
    }
  }

  return <Visibility visibility={state} handleEvent={changeTextVisibility} />;
};

export default PasswordVisibilityContainer;
