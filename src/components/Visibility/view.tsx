import React, { MouseEvent } from 'react';
import { VisibilityState } from './state';
import Icon from '../Icon';

interface VisibilityProps {
  visibility: VisibilityState;
  handleEvent(event: MouseEvent<HTMLSpanElement>): void;
}

const Visibility = ({ visibility, handleEvent }: VisibilityProps) => (
  <Icon
    icon={visibility}
    role="button"
    aria-pressed={false}
    data-button="password"
    onClick={handleEvent}
    style={{ cursor: 'pointer' }}
  />
);

export default Visibility;
