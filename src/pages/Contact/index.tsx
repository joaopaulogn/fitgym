import React, { MouseEvent } from 'react';
import Contact from './view';

const ContactContainer = () => {
  function activateOptions({
    currentTarget,
  }: MouseEvent<HTMLInputElement>): void {
    const element =
      currentTarget.parentElement?.parentElement?.parentElement
        ?.nextElementSibling;

    element?.classList.add('active');
  }

  function disableOptions({
    currentTarget,
  }: MouseEvent<HTMLInputElement>): void {
    const element =
      currentTarget.parentElement?.parentElement?.parentElement
        ?.nextElementSibling;

    element?.classList.remove('active');
  }

  return (
    <Contact
      handleActiveOptions={activateOptions}
      handleDisabledOptions={disableOptions}
    />
  );
};

export default ContactContainer;
