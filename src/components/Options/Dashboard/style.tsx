import styled from 'styled-components';

const Container = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: var(--padding-default);

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
    font-size: 1.4rem;
    line-height: 2rem;
    margin-left: var(--margin-small);
  }

  a,
  .icon {
    color: var(--white-color);
  }
`;

export default Container;
