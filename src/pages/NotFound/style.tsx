import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  align-items: center;

  .text {
    margin-right: 10rem;
  }

  .heading {
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 2.8rem;
    text-transform: uppercase;
    color: var(--text-color);
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
      color: var(--primary-color);
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .balloon {
    position: absolute;
    top: 7rem;
    right: 12rem;
  }
`;

export default Container;
