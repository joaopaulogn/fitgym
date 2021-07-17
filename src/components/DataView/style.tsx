import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-bottom: var(--margin-default);
  padding: var(--padding-default);
  position: relative;

  background-color: var(--primary-color-light);
  border-radius: var(--border-radius);
  color: var(--text-color);

  .role {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span:first-child {
      font-weight: 500;
    }
  }

  & > .content {
    display: flex;
    margin-left: var(--margin-largest);

    input {
      background-color: transparent;
      color: inherit;
      border: none;
      outline: none;
    }

    .icon {
      color: inherit;
      position: absolute;
      right: 2.4rem;
    }
  }
`;

export default Container;
