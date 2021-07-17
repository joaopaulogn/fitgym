import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  padding: var(--padding-large);
  background-color: var(--primary-color-light);

  .container {
    width: 104.2rem;
    margin-left: var(--margin-large);
  }

  main > div {
    height: 56.7rem;
    display: flex;

    & > section,
    form {
      padding: var(--padding-large);
      background-color: var(--white-color);
      border: 0.1rem solid var(--gray-color);
      border-radius: var(--border-radius);

      &.students {
        padding-top: 0;
      }

      &.profile,
      &.contact {
        min-width: 52.3rem;
      }
    }
  }
`;

export default Container;
