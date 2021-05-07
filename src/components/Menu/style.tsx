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

      & .icon {
        color: var(--primary-color);

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
      }
    }

    & .title {
      font-size: 2.4rem;
      line-height: 2.8rem;
      color: var(--white-color);
      font-weight: 500;
    }
  }

  .profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: var(--padding-default);
    margin-bottom: var(--margin-large);

    color: var(--white-color);
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);

    .info {
      p {
        margin-bottom: var(--margin-smallest);
      }
      span {
        color: var(--white-color-alpha);
      }
    }

    .icon {
      color: var(--white-color);
      z-index: 2;
    }
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
