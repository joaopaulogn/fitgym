import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  input {
    width: 100%;
    padding: var(--padding-default) 0 var(--padding-default)
      calc(2.4rem + var(--padding-small));
    color: var(--text-color-alpha);
    border-bottom: 0.1rem solid var(--text-color-alpha);
    background-color: transparent;
    transition: all 0.4s;

    &::placeholder {
      color: var(--text-color-alpha);
    }

    &:focus,
    &.valid {
      border-bottom-color: var(--primary-color);
      color: var(--primary-color);

      & ~ .icon {
        color: var(--primary-color);
      }
    }

    &.invalid {
      color: var(--error-color-alpha);
      border-bottom-color: var(--error-color-alpha);

      & ~ span {
        color: var(--error-color-alpha);
      }
    }

    & ~ .icon {
      transition: all 0.4s;
    }

    &[type='password'],
    &[type='search'] {
      padding-right: calc(2.4rem + var(--padding-small));
    }

    &[type='search'] {
      padding-left: calc(2.4rem + var(--margin-small) + var(--margin-default));
      background-color: var(--white-color);
      border: 0.1rem solid transparent;
      border-radius: var(--border-radius);

      &:focus {
        color: var(--primary-color);
        border-color: var(--primary-color);

        & ~ .icon {
          color: var(--primary-color);
        }
      }

      & ~ .icon {
        &:first-of-type {
          left: 1.2rem;
        }

        &:nth-of-type(2) {
          right: 1.2rem;
        }
      }
    }
  }

  .icon {
    position: absolute;
    top: 2.4rem;
    transform: translateY(-50%);

    &:first-of-type {
      left: 0;
    }

    &:nth-of-type(2) {
      right: 0;
    }

    .instructions {
      margin-top: var(--margin-small);
    }
  }
`;

export default Container;
