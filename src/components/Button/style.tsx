import styled from 'styled-components';

const Container = styled.button`
  height: 3.5rem;
  font-weight: 500;
  color: var(--white-color);
  background-color: var(--primary-color);
  border-radius: var(--border-radius);
  text-align: center;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background-color: var(--primary-color-light);
    color: var(--text-color);
    cursor: default;
  }

  &.loading {
  }

  &.large {
    width: 100%;
  }

  &.default {
    width: 34rem;
  }

  &.small {
    width: 17rem;
  }
`;

export default Container;
