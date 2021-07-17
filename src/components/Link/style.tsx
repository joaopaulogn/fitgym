import styled from 'styled-components';

const Container = styled.a`
  display: flex;
  align-items: center;

  font-weight: 500;
  color: var(--primary-color);

  .icon {
    color: inherit;
    margin-right: var(--margin-small);
  }

  &.right {
    flex-direction: row-reverse;
    justify-content: flex-end;

    .icon {
      margin-right: 0;
      margin-left: var(--margin-small);
    }
  }
`;

export default Container;
