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
    background-color: var(--secondary-color);
    color: var(--primary-color);
    cursor: default;
  }
`;

export default Container;
