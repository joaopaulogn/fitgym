import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  align-items: center;

  .text {
    margin-right: 10rem;
  }

  .status-code {
    font-size: 6rem;
    font-weight: 700;
    color: var(--primary-color);
  }

  .heading {
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 2.8rem;
    color: var(--text-color);
    text-transform: uppercase;
    margin-top: var(--margin-large);
    margin-bottom: var(--margin-default);

    & > span {
      display: block;
    }
  }

  p {
    font-size: 1.4rem;
    line-height: 2rem;
    color: var(--text-color);

    & > a {
      font-weight: 500;
      color: var(--primary-color);
    }
  }

  .banner {
    max-width: 67.5rem;
    max-height: 50rem;
  }
`;

export default Container;
