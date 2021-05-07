import styled from 'styled-components';

const Container = styled.section`
  height: 100vh;
  display: flex;
  padding: var(--margin-large);
  background-color: var(--primary-color-light);

  & > section {
    min-width: 106rem;
    width: 100%;
    padding-left: var(--padding-large);

    main {
      display: flex;
      justify-content: space-between;
      min-height: 56.7rem;

      & > section {
        min-width: 52.3rem;
        padding: 2.4rem;
        background-color: var(--white-color);
        border-radius: var(--border-radius);
      }

      .banner {
        align-self: flex-end;
      }
    }

    footer {
      margin-top: var(--margin-large);
      padding-top: var(--padding-default);
      border-top: 0.1rem solid rgb(80, 86, 104, 0.1);
    }
  }
`;

export default Container;
