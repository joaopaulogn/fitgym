import styled from 'styled-components';

const Container = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 var(--padding-default);
  color: var(--white-color);

  background-color: transparent;
  border-radius: var(--border-radius);

  &:hover {
    cursor: pointer;
  }

  &.active {
    font-weight: 500;
    background-color: var(--white-color);

    a,
    .icon {
      color: var(--primary-color);
    }
  }

  a {
    width: 100%;
    padding: var(--padding-default);
    font-size: 1.4rem;
    line-height: 2rem;
    margin-left: var(--margin-small);

    &.active {
      font-weight: 500;
      background-color: var(--white-color);

      &,
      .icon {
        color: var(--primary-color);
      }
    }
  }

  a,
  .icon {
    color: inherit;
  }
`;

export default Container;
