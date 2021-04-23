import { removeInvalidState } from '../invalidState';

export function handleClick(event: React.MouseEvent): void {
  removeInvalidState(event.currentTarget as HTMLInputElement);
}

export function handleFocus(event: React.FocusEvent): void {
  removeInvalidState(event.target as HTMLInputElement);
}
