import styled from 'styled-components';

const Container = styled.main`
  display: flex;

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
