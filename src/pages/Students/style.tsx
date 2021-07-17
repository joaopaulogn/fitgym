import styled from 'styled-components';

const Container = styled.div`
  flex-direction: column;

  .search-box {
    display: flex;
    align-items: center;
    margin-bottom: var(--margin-large);

    input {
      width: 80rem;

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

  section {
    overflow-y: scroll;

    table {
      width: 100%;
    }

    thead {
      position: sticky;
      top: 0;
      left: 0;
      z-index: 2;

      & > tr {
        padding: var(--padding-large) 0 var(--padding-default) 0;
        background-color: var(--white-color);
        border-bottom: 0.1rem solid var(--primary-color-light);

        th {
          width: 100%;
          font-weight: 500;
          text-align: left;
          color: var(--primary-color);

          &:nth-child(3),
          &:nth-child(4) {
            width: 60%;
          }

          &:last-child {
            text-align: center;
          }
        }
      }
    }
  }
`;

export default Container;
