import styled from 'styled-components';

const Container = styled.div`
  min-width: 34rem;
  max-width: 35rem;

  .heading {
    &--main {
      display: block;
    }
  }

  .form {
    max-width: 34rem;
    margin-bottom: var(--margin-large);

    &__field {
      margin-top: var(--margin-default);
    }

    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: var(--margin-large);
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
