import React, { MouseEvent } from 'react';
import Option from './view';

export function activateOption(element: HTMLLIElement) {
  element.classList.add('active');
}

interface OptionProps {
  path: string;
  icon: string;
  text: string;
}

const OptionContainer = ({ path, icon, text }: OptionProps) => {
  function acitvateOption(event: MouseEvent<HTMLLIElement>) {
    const items = document.querySelectorAll(
      '[data-option="dashboard"]',
    ) as NodeListOf<HTMLLIElement>;

    items.forEach((item) => item.classList.remove('active'));
    activateOption(event.currentTarget);
  }

  return (
    <Option path={path} icon={icon} text={text} handleEvent={acitvateOption} />
  );
};

export default OptionContainer;
