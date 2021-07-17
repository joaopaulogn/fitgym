import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  padding: var(--margin-large);
  background-color: var(--primary-color-light);

  .container {
    width: 100%;
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
`;

export default Container;
