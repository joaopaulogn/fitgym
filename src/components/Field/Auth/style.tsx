import styled from 'styled-components';

const Container = styled.div`
  width: 34rem;
  display: flex;
  flex-direction: column;

  input {
    &:focus,
    &.valid {
      border-bottom-color: var(--primary-color);

      & ~ span {
        color: var(--primary-color);
      }
    }

    &.valid {
      color: var(--primary-color);
    }

    &.invalid {
      color: var(--error-color-alpha);
      border-bottom-color: var(--error-color-alpha);

      &::placeholder,
      & ~ span {
        color: var(--error-color-alpha);
      }
    }

    &:focus,
    &.valid,
    &.invalid {
      transition: all 0.4s;

      & ~ span {
        transition: all 0.4s;
      }
    }
  }
`;

export default Container;
