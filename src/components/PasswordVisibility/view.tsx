import React, { MouseEvent } from 'react';
import VisibilityState from '../../enums/PasswordVisibility';
import Icon from '../Icon';

interface PasswordVisibilityProps {
  visibility: VisibilityState;
  handleEvent(event: MouseEvent<HTMLSpanElement>): void;
}

const PasswordVisibility = ({
  visibility,
  handleEvent,
}: PasswordVisibilityProps): JSX.Element => (
  <Icon
    icon={visibility}
    role="button"
    aria-pressed={false}
    data-button="password"
    onClick={handleEvent}
    style={{ cursor: 'pointer' }}
  />
);

export default PasswordVisibility;
