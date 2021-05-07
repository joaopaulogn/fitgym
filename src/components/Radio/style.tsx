import styled from 'styled-components';

const Container = styled.label`
  display: flex;
  align-items: center;
  margin-right: var(--margin-large);

  &:hover {
    cursor: pointer;
  }

  input {
    display: none;
    visibility: hidden;
    opacity: 0;
    position: relative;

    &:checked + .radio {
      border-color: var(--primary-color);

      &::before {
        display: block;
        visibility: visible;
        opacity: 1;
      }
    }
  }

  .radio {
    width: 2rem;
    height: 2rem;
    margin-right: var(--margin-small);

    background-color: transparent;
    border-radius: 50%;
    border: 0.2rem solid var(--text-color);

    position: relative;

    &::before {
      content: '';
      display: none;
      visibility: hidden;
      opacity: 0;
      width: 1rem;
      height: 1rem;

      background-color: var(--primary-color);
      border-radius: 50%;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      z-index: 2;
    }
  }
`;

export default Container;
