import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--margin-default);
  color: var(--text-color);
  position: relative;

  input {
    min-width: 34rem;
    padding: var(--padding-default) 0 var(--padding-default) 3.2rem;
    border-bottom: 0.1rem solid var(--text-color-alpha);

    &::placeholder {
      color: var(--text-color-alpha);
    }

    &:focus,
    &:valid {
      color: var(--primary-color);
      border-bottom-color: var(--primary-color);

      &::placeholder,
      & + .icon,
      & + .icon + .icon {
        color: var(--primary-color);
      }
    }

    &:invalid {
      color: var(--text-color-alpha);

      &::placeholder {
        color: var(--text-color-alpha);
      }
    }

    &.invalid {
      color: var(--error-color-alpha);
      border-bottom-color: var(--error-color-alpha);

      &::placeholder,
      & + .icon {
        color: var(--error-color-alpha);
      }
    }

    &:focus,
    &:valid {
      &::placeholder,
      & + .icon {
        transition: all 0.4s;
      }
    }
  }

  .icon {
    position: absolute;
    top: 50%;

    transform: translateY(-50%);
  }

  & > .icon + .icon {
    color: var(--text-color-alpha);
    outline: none;
    right: 0.4rem;
    cursor: pointer;
  }

  .error {
    display: none;
    visibility: hidden;
    opacity: 0;
    color: var(--error-color);
    margin-top: var(--margin-smallest);

    &.visible {
      display: block;
      visibility: visible;
      opacity: 1;
    }
  }
`;

export default Container;
