import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: var(--padding-default) var(--padding-large);

  background-color: var(--primary-color-light);
  border-radius: var(--border-radius);
  color: var(--primary-color);

  position: relative;

  .role {
    display: flex;
    align-items: center;
    margin-right: 8rem;

    span {
      font-weight: 500;
      margin-right: var(--margin-large);
    }
  }

  input {
    background-color: transparent;
    color: var(--primary-color);
    border: none;
  }

  .icon,
  .button {
    color: inherit;
  }

  & > .button {
    position: absolute;
    right: 2.4rem;
  }
`;

export default Container;
