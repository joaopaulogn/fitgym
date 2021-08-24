import styled from 'styled-components';

const Container = styled.li`
  display: flex;

  &.disable {
    display: none;
    visibility: hidden;
    opacity: 0;
  }

  &:hover {
    cursor: pointer;
  }

  .data {
    height: 4.8rem;
    display: flex;
    align-items: center;
    color: var(--text-color);

    .icon {
      margin-right: var(--margin-small);
      color: inherit;
    }
  }
`;

export default Container;
