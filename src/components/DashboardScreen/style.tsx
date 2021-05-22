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

    footer {
      margin-top: var(--margin-large);
      padding-top: var(--padding-default);
      border-top: 0.1rem solid rgb(80, 86, 104, 0.1);
    }

    .container {
      min-height: 56.7rem;
      display: flex;
      justify-content: space-between;
    }

    .content {
      width: 100%;
      margin-right: var(--margin-largest);
      padding: 2.4rem;
      border-radius: var(--border-radius);
      background-color: var(--white-color);
    }

    .banner {
      align-self: flex-end;
    }
  }
`;

export default Container;
