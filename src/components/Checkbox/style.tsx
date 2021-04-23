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

  span {
    display: flex;
    align-items: center;
    color: var(--primary-color);
    margin-right: var(--margin-small);
    outline: none;

    &.hidden {
      display: none;
      visibility: hidden;
      opacity: 0;
    }
  }
`;

export default Container;
