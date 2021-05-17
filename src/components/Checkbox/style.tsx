import styled from 'styled-components';

const Container = styled.label`
  display: flex;
  align-items: center;

  position: relative;

  &:hover {
    cursor: pointer;
  }

  input {
    display: none;
    visibility: hidden;
    opacity: 0;

    &:checked {
      & + .checkbox > span {
        border-color: transparent;
        background-color: var(--primary-color);

        &::after {
          display: block;
          visibility: visible;
          opacity: 1;
          font-size: 1.6rem;
          font-weight: 600;
          color: var(--white-color);
        }
      }
    }
  }

  .checkbox {
    display: flex;
    align-items: center;
    margin-right: var(--margin-small);

    span {
      width: 1.8rem;
      height: 1.8rem;

      position: relative;

      background-color: transparent;
      border: 0.2rem solid var(--primary-color);
      border-radius: 0.2rem;

      &::after {
        content: 'check';
        display: none;
        visibility: hidden;
        opacity: 0;

        font-size: 1.8rem;
        color: var(--text-color);

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .text {
    font-weight: 500;
    color: var(--primary-color);
  }
`;

export default Container;
