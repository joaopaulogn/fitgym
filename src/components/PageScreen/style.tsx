import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  padding: var(--margin-large);
  background-color: var(--primary-color-light);

  section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--white-color);
    border-radius: var(--border-radius);

    position: relative;
  }

  .logo {
    top: 2.4rem;
  }

  .button {
    bottom: 2.4rem;
  }

  .menu {
    top: 50%;
    transform: translateY(-50%);
  }

  .logo,
  .menu,
  .button {
    position: absolute;
    left: 2.4rem;
  }
`;

export default Container;
