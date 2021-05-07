import styled from 'styled-components';

const Container = styled.section`
  height: 100vh;
  display: flex;
  padding: var(--margin-large);
  background-color: var(--primary-color-light);

  aside {
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
      display: flex;
      align-items: center;
      margin-bottom: var(--margin-largest);

      .icon-box {
        width: 3.6rem;
        height: 3.6rem;
        margin-right: var(--margin-default);
        background-color: var(--white-color);
        border-radius: 50%;

        position: relative;

        & > .icon {
          color: var(--primary-color);

          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
        }
      }

      & > .title {
        font-size: 2.4rem;
        line-height: 2.8rem;
        color: var(--white-color);
        font-weight: 500;
      }
    }

    footer {
      display: flex;
      flex-direction: column;

      a {
        color: var(--white-color);
      }

      & > a:first-child {
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
  }
`;

export default Container;
