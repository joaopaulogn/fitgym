import styled from 'styled-components';

const Container = styled.div`
  .heading {
    &--main {
      display: block;
    }
  }

  .form {
    max-width: 100%;

    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: var(--margin-large) 0;
    }

    &__link {
      font-size: 1.2rem;
      line-height: 1.4rem;
      font-weight: 500;
      color: var(--primary-color);

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default Container;
