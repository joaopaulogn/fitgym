import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: column;

  .search-box {
    display: flex;
    align-items: center;
    margin-bottom: var(--margin-large);

    input {
      width: 80rem;
      border-radius: var(--border-radius);
      border-bottom: none;

      // TODO: fazer um botão personalizado para resetar o termo de busca
      /* &::-webkit-search-cancel-button,
        &::-webkit-search-decoration   {
          display: none;
        } */
    }

    button {
      margin-left: var(--margin-large);
    }
  }

  .students {
    max-height: 50.3rem;
    padding: 2.4rem;
    padding-top: 0;
    background-color: var(--white-color);
    border-radius: var(--border-radius);
    overflow-y: scroll;
  }

  table {
    width: 100%;
  }

  .header {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 2;

    padding: var(--padding-large) 0 var(--padding-default) 0;
    margin-bottom: var(--margin-default);
    background-color: var(--white-color);
    border-bottom: 0.1rem solid var(--primary-color-light);

    th {
      width: 100%;
      font-weight: 500;
      text-align: left;
      color: var(--primary-color);
    }

    th:nth-child(3),
    th:nth-child(4) {
      width: 60%;
    }

    th:last-child {
      text-align: center;
    }
  }
`;

export default Container;
