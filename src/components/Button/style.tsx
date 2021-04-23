import styled from 'styled-components';

const Container = styled.button`
  width: 100%;
  height: 3.5rem;
  font-weight: 500;
  color: var(--white-color);
  background-color: var(--primary-color);
  border-radius: 0.8rem;
  text-align: center;

  &:hover {
    cursor: pointer;
  }

  &[type='submit'] {
    margin-top: var(--margin-large);
  }
`;

export default Container;
