import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  input {
    min-width: 100%;
    color: var(--text-color-alpha);
    padding: var(--padding-default);
    padding-left: calc(var(--padding-large) + var(--padding-small));
    border-bottom: 0.1rem solid var(--text-color-alpha);

    &::placeholder {
      color: var(--text-color-alpha);
    }

    &.valid {
      color: var(--primary-color);
    }

    &.invalid {
      color: var(--error-color-alpha);
      border-bottom-color: var(--error-color-alpha);

      &::placeholder,
      & ~ .button,
      & ~ .icon {
        color: var(--error-color-alpha);
      }
    }

    &:focus,
    &.valid {
      border-bottom-color: var(--primary-color);

      & ~ .button,
      & ~ .icon {
        color: var(--primary-color);
      }
    }

    &:focus,
    &.valid,
    &.invalid {
      transition: all 0.4s;

      & ~ .button,
      & ~ .icon {
        transition: all 0.4s;
      }
    }

    &[type='search'] {
      padding-left: calc(
        var(--padding-default) + 2.4rem + var(--padding-small)
      );
      padding-right: var(--margin-default);
      border: 0.1rem solid transparent;

      &:focus {
        border-color: var(--primary-color);
      }

      & + .icon {
        left: 1.2rem;
      }
    }

    &[type='password'] {
      padding-right: calc(2.4rem + var(--margin-small));
    }
  }

  .icon,
  .button {
    position: absolute;
    top: 0.8rem;
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
