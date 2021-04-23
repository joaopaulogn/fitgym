import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  input {
    min-width: 100%;
    border-bottom: 0.1rem solid var(--text-color-alpha);
    padding: var(--padding-default) 0 var(--padding-default)
      calc(2.4rem + var(--margin-small));
    color: var(--text-color-alpha);

    &[type='password'] {
      padding-right: calc(2.4rem + var(--margin-small));
    }

    &::placeholder {
      color: var(--text-color-alpha);
    }

    &.valid {
      color: var(--primary-color);
    }

    &:focus,
    &.valid {
      border-bottom-color: var(--primary-color);

      & + .icon,
      & + .icon + .button {
        color: var(--primary-color);
      }
    }

    &.invalid {
      color: var(--error-color-alpha);
      border-bottom-color: var(--error-color-alpha);

      &::placeholder,
      & + .icon,
      & + .icon + .button {
        color: var(--error-color-alpha);
      }
    }

    &:focus,
    &.valid,
    &.invalid {
      transition: all 0.4s;

      & + .icon,
      & + .icon + .button {
        transition: all 0.4s;
      }
    }
  }

  .icon,
  .button {
    position: absolute;
    top: 0.9rem;
  }

  .icon {
    left: 0;
  }

  .button {
    right: 0;
    outline: none;

    &:hover {
      cursor: pointer;
    }
  }
`;

export default Container;
