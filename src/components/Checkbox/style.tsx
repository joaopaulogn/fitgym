import styled from 'styled-components';

const Container = styled.label`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: var(--primary-color);
  position: relative;

  &:hover {
    cursor: pointer;
  }

  .checkbox {
    display: flex;
    align-items: center;
    margin-right: var(--margin-small);
    outline: none;

    &.hidden {
      display: none;
      visibility: hidden;
      opacity: 0;
    }
  }

  .icon {
    color: var(--primary-color);
  }
`;

export default Container;
