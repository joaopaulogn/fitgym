import styled from 'styled-components';

const Container = styled.li`
  a {
    display: flex;
    align-items: center;
    padding-bottom: var(--padding-default);
    padding-right: var(--padding-small);

    font-size: 1.4rem;
    line-height: 2rem;
    color: var(--text-color);
    border-bottom: 0.2rem solid transparent;

    &.active {
      color: var(--primary-color);
      font-weight: 500;
      border-bottom-color: var(--primary-color);

      & > .icon {
        color: inherit;
      }
    }

    .icon {
      margin-right: var(--margin-small);
    }
  }
`;

export default Container;
