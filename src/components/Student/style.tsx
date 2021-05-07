import styled from 'styled-components';

const Container = styled.tr`
  border-bottom: 0.1rem solid transparent;

  &:hover {
    cursor: pointer;
  }

  td {
    width: 100%;

    &:nth-child(3),
    &:nth-child(4) {
      width: 60%;
    }

    &:last-child {
      justify-content: center;
    }
  }

  &.active > td {
    color: var(--primary-color);
    font-weight: 500;
  }
`;

export default Container;
