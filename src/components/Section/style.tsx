import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;

  .text {
    color: var(--text-color);
    margin-bottom: var(--margin-large);

    span {
      display: block;
    }
  }

  form {
    width: 34rem;
    margin-bottom: 0;

    & .field:not(:last-of-type) {
      margin-bottom: var(--margin-default);
    }
  }

  form + button {
    align-self: flex-start;
  }

  .data:not(:last-of-type) {
    margin-bottom: var(--margin-default);
  }

  button {
    align-self: flex-end;
    margin-top: var(--margin-large);
  }
`;

export default Container;
