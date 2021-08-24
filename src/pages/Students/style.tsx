import styled from 'styled-components';

const Container = styled.div`
  width: 104.2rem;
  flex-direction: column;

  .search-box {
    display: flex;
    align-items: center;
    margin-bottom: var(--margin-large);

    input {
      width: 100%;

      // TODO: fazer um botão personalizado para resetar o termo de busca
      /* &::-webkit-search-cancel-button,
        &::-webkit-search-decoration   {
          display: none;
        } */
    }
  }

  .students {
    overflow-y: scroll;
    padding: 0 var(--padding-large);
    border-bottom: 0.1rem solid var(--primary-color-light);
    background-color: var(--white-color);
    border: 0.1rem solid var(--gray-color);
    border-radius: var(--border-radius);

    .header {
      display: flex;
      justify-content: space-between;
      padding: var(--padding-large) 0 var(--padding-default) 0;

      position: sticky;
      top: 0;
      left: 0;
      z-index: 2;

      li {
        font-weight: 500;
        text-align: left;
        color: var(--primary-color);
      }
    }

    .header,
    &__container {
      li,
      div {
        width: 100%;
      }
    }

    .header > li,
    &__container > li > .data {
      &:nth-child(3) {
        max-width: 16rem;
        margin-right: var(--margin-largest);
      }

      &:nth-child(4) {
        text-align: center;
        max-width: 16rem;
      }
    }
  }
`;

export default Container;
