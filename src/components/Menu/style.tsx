import styled from 'styled-components';

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 25.2rem;
  max-width: 24.2rem;
  width: 100%;
  height: 100%;
  padding: 2.4rem;
  background-color: var(--primary-color);
  border-radius: var(--border-radius);

  .logo {
    margin-bottom: var(--margin-largest);
  }

  footer {
    display: flex;
    flex-direction: column;

    a {
      color: var(--white-color);
    }

    & a:first-child {
      margin-bottom: var(--margin-small);
    }

    & > a:hover:not(:last-child) {
      text-decoration: underline;
    }

    .button {
      display: flex;
      align-items: center;
      margin-top: var(--margin-largest);

      &:hover {
        cursor: pointer;
      }

      .icon {
        color: var(--white-color);
        margin-right: var(--margin-small);
      }
    }
  }
`;

export default Container;
