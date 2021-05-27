import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: var(--padding-default);

  background-color: var(--primary-color-light);
  border-radius: var(--border-radius);
  color: var(--text-color);

  position: relative;

  .role {
    display: flex;
    align-items: center;
    margin-right: var(--margin-largest);

    span:first-child {
      font-weight: 500;
      margin-right: var(--margin-default);
    }
  }

  input {
    background-color: transparent;
    color: inherit;
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
