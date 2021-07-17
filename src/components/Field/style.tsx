import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  .icon {
    width: 2.4rem;
    position: absolute;

    &:first-of-type {
      left: 0;
    }

    &:last-of-type {
      right: 0;
    }
  }

  input {
    width: 100%;
    padding: var(--padding-default) 0;
    padding-left: calc(2.4rem + var(--padding-small));
    padding-right: 0;
    color: var(--text-color-alpha);
    border-bottom: 0.1rem solid var(--text-color-alpha);
    background-color: transparent;

    &:focus {
      border-bottom-color: var(--primary-color);
    }

    &::placeholder {
      color: var(--text-color-alpha);
    }

    &[type='search'] {
      padding-right: calc(2.4rem + var(--padding-small));
      padding-left: calc(2.4rem + var(--margin-small) + var(--margin-default));
      background-color: var(--white-color);
      border: 0.1rem solid transparent;
      border-radius: var(--border-radius);

      & + .icon {
        left: 1.2rem;

        & + .icon {
          right: 1.2rem;
        }
      }
    }

    &[type='password'] {
      padding-right: calc(2.4rem + var(--padding-small));
    }

    &[type='number'] {
      padding-left: 0;
      padding-right: calc(2.4rem + var(--padding-default));

      appearance: none;
      -moz-appearance: none;

      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
    }
  }
`;

export default Container;
