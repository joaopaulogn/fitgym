import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  padding: var(--margin-large);
  background-color: var(--primary-color-light);

  section {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--white-color);
    border-radius: var(--border-radius);

    position: relative;
  }

  .logo {
    position: absolute;
    top: 2.4rem;
    left: 2.4rem;
  }

  main {
    display: flex;
  }

  .text {
    width: 32.5rem;
    display: flex;
    flex-direction: column;
    margin-right: 6rem;

    p:first-child {
      font-weight: 700;
      text-transform: uppercase;
      color: var(--primary-color);
    }

    p:nth-child(2) {
      color: var(--text-color);
      margin: var(--margin-default) 0 var(--margin-large) 0;
    }

    span {
      display: inline-block;
      margin-top: var(--margin-default);
    }
  }

  .balloon {
    position: absolute;
    top: 7rem;
    right: 22rem;
  }
`;

export default Container;
