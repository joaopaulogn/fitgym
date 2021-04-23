import React from 'react';

function changeState(event: React.MouseEvent): void {
  const checkbox = event.currentTarget.firstElementChild as HTMLSpanElement;
  let state = 'check_box_outline_blank';
  let isChecked = 'false';

  if (checkbox.getAttribute('aria-checked') === 'false') {
    state = 'check_box';
    isChecked = 'true';
  }

  checkbox.innerHTML = state;
  checkbox.setAttribute('aria-checked', isChecked);
  checkbox.classList.remove('material-icons-outlined');
  checkbox.classList.add('material-icons');
}
export default changeState;
