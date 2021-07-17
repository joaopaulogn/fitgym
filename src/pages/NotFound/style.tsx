import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  height: 22rem;

  .text {
    width: 32.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 6rem;
    color: var(--text-color);

    p:first-child {
      font-weight: 700;
      text-transform: uppercase;
      color: var(--primary-color);
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
