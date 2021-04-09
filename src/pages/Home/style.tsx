import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  padding: var(--padding-large);
  background-color: var(--primary-color);
  color: var(--white-color);

  .title {
    font-size: 4.6rem;
    line-height: 5.6rem;
    text-transform: uppercase;
    margin-bottom: var(--margin-default);

    &--sub {
      font-weight: 300;
    }
  }

  .subtitle {
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 2.8rem;

    &--main {
      display: block;
    }
  }

  .banner {
    height: 47.8rem;
    width: 71.5rem;
    margin: 5rem 0;

    & img {
      max-width: 100%;
    }
  }

  .sub-content {
    width: 49.8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: var(--white-color);
    border-radius: 0.8rem;
  }
`;

export default Container;
