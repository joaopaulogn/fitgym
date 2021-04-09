import styled from 'styled-components';

const Container = styled.button`
  width: 100%;
  height: 3.5rem;
  background-color: var(--primary-color);
  border-radius: 0.8rem;

  font-weight: 500;
  color: var(--white-color);
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

export default Container;
