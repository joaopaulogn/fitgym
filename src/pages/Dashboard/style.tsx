import styled from 'styled-components';

const Container = styled.section`
  height: 100vh;
  display: flex;
  padding: var(--margin-large);
  background-color: var(--primary-color-light);

  .profile-page {
    min-width: 106rem;
    width: 100%;
    padding-left: var(--padding-large);

    header {
      display: flex;
      justify-content: space-between;
      margin-bottom: var(--margin-largest);
    }

    .heading {
      font-weight: 500;
      margin-bottom: var(--margin-smallest);
    }

    .container {
      padding: 2.4rem;
      background-color: var(--white-color);
      border-radius: var(--border-radius);
    }

    .search-box {
      display: flex;
      align-items: center;
      margin-bottom: var(--margin-large);

      input {
        width: 80rem;
        border-radius: var(--border-radius);
        border-bottom: none;

        /* &::-webkit-search-cancel-button,
        &::-webkit-search-decoration   {
          display: none;
        } */
      }

      button {
        width: 100%;
        margin-left: var(--margin-large);
      }
    }

    .students {
      display: flex;
      flex-direction: column;

      .panel {
        max-height: 55.5rem;
        padding-top: 0;
        overflow-y: scroll;
      }

      .table {
        width: 100%;
      }

      .header {
        padding: var(--padding-default) 0;
        position: sticky;
        top: 0;
        z-index: 2;

        background-color: var(--white-color);
        border-bottom: 0.1rem solid var(--primary-color-light);
        margin-bottom: var(--margin-default);

        th {
          width: 100%;
          font-weight: 500;
          text-align: left;
          color: var(--text-color);
        }

        th:nth-child(3),
        th:nth-child(4) {
          width: 60%;
        }

        th:last-child {
          text-align: center;
        }
      }
    }
  }
`;

export default Container;
