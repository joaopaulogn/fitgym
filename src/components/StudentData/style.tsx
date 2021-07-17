import styled from 'styled-components';

const Container = styled.tr`
  &:hover {
    cursor: pointer;
  }

  .data {
    width: 100%;
    height: 4.8rem;
    display: flex;
    align-items: center;
    color: var(--text-color);

    &:nth-child(3),
    &:nth-child(4) {
      width: 60%;
    }

    &:last-child {
      justify-content: center;
    }

    .icon {
      margin-right: var(--margin-small);
      color: inherit;
    }
  }
`;

export default Container;
