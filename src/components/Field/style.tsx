import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-width: 20rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;

  input {
    width: 100%;
    padding: var(--padding-default) 0 var(--padding-default) 0;
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

      & ~ .icon,
      & ~ .title,
      & ~ .measure-type {
        color: var(--primary-color);
      }
    }

    &.invalid {
      color: var(--error-color-alpha);
      border-bottom-color: var(--error-color-alpha);

      & ~ span,
      & ~ .title,
      & ~ .measure-type {
        color: var(--error-color-alpha);
      }
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

    &[type='number'] {
      -moz-appearance: textfield;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    &.measure {
      padding-left: 8.5rem;
      padding-right: 2.5rem;
      text-align: end;

      & ~ .title,
      & ~ .measure-type {
        color: var(--text-color-alpha);
        position: absolute;
        top: 2.4rem;
        transform: translateY(-50%);

        transition: all 0.4s;
      }

      & ~ span {
        top: 50%;
      }
    }

    &.authentication {
      padding-left: calc(var(--padding-large) + var(--padding-small));
    }
  }

  .icon {
    position: absolute;
    top: 2.4rem;
    transform: translateY(-50%);

    transition: all 0.4s;
  }

  .icon {
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

  .measure-type {
    font-size: 1.2rem;
    right: 0;
  }

  .title {
    font-size: 1.4rem;
  }

  &.visualization {
    min-width: 20rem;

    input {
      background-color: var(--primary-color-light);
      border-bottom: none;
      border-radius: var(--border-radius);
      padding-top: var(--padding-default);
      padding-bottom: var(--padding-default);

      &.measure {
        padding-left: 7rem;
        padding-right: 4rem;
      }

      &#name,
      &#email,
      &#phone {
        padding: var(--padding-default);
      }

      &::placeholder {
        color: inherit;
      }

      &,
      & ~ .title,
      & ~ .measure-type {
        color: var(--text-color);
      }
    }

    .title {
      left: 1.2rem;
    }

    .measure-type {
      right: 1.2rem;
    }
  }
`;

export default Container;
