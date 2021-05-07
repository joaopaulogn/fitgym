import styled from 'styled-components';

const Container = styled.form`
  max-width: 34rem;
  margin-bottom: var(--margin-large);

  .field:not(:last-of-type) {
    margin-bottom: var(--margin-default);
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: var(--margin-large);
  }

  .link {
    font-size: 1.2rem;
    line-height: 1.4rem;
    font-weight: 500;
    color: var(--primary-color);

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    min-width: 34rem;
    margin-top: var(--margin-large);
  }
`;

export default Container;
