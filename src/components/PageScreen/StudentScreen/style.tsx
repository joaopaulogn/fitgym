import styled from 'styled-components';

const Container = styled.div`
  background-color: var(--primary-color-light);
  height: 100vh;
  display: flex;
  padding: var(--padding-large);
  position: relative;

  aside,
  & > .container {
    height: 100%;
  }

  aside {
    display: flex;
    flex-direction: column;
    margin-right: var(--margin-largest);
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .main-data,
    .body-measurements {
      min-width: 110rem;
      background-color: var(--white-color);
      border-radius: var(--border-radius);
      padding: var(--padding-large);
    }

    .main-data {
      margin-bottom: var(--margin-large);

      form {
        display: flex;
        align-items: center;
      }

      label {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 1.4rem;
        color: var(--text-color);

        &:not(:last-child) {
          margin-right: var(--margin-large);
        }

        &:first-child {
          min-width: 32rem;
        }

        &:nth-child(2) {
          min-width: 38rem;
        }

        &:last-child {
          min-width: 20rem;
          align-self: flex-start;
        }

        .role {
          display: none;
          visibility: hidden;
          opacity: 0;

          &.visible {
            display: block;
            visibility: visible;
            opacity: 1;

            margin-bottom: var(--margin-default);
          }
        }

        input {
          padding-left: 0;
          -moz-appearance: textfield;

          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        }

        .select {
          background-color: transparent;
          border-bottom: 0.1rem solid var(--text-color-alpha);
          padding: var(--padding-default) 0;
          position: relative;

          &:hover {
            cursor: pointer;
          }

          &.active {
            border-bottom-color: var(--primary-color);

            [role='button'] {
              color: var(--primary-color);
            }

            .selectedOption {
              color: var(--primary-color);
            }
          }

          &.visualization {
            border-bottom: none;
            background-color: var(--primary-color-light);
            padding-left: var(--padding-default);
            border-radius: var(--border-radius);

            .selectedOption {
              color: var(--text-color);
            }
          }

          .selectedOption {
            color: var(--text-color-alpha);
          }

          .options {
            width: 100%;
            position: absolute;
            top: 3.6rem;

            color: var(--white-color);
            background-color: var(--primary-color);
            border-bottom-left-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
            padding: var(--padding-default);

            display: none;
            visibility: hidden;
            opacity: 0;

            &.active {
              display: block;
              visibility: visible;
              opacity: 1;
            }

            .option {
              color: inherit;

              &:not(:last-child) {
                margin-bottom: var(--margin-default);
              }
            }
          }

          [role='button'] {
            color: var(--text-color-alpha);
            outline: none;

            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);

            &::after {
              content: 'expand_more';
            }
          }
        }
      }
    }

    .body-measurements {
      form {
        .main-measurements {
          display: flex;
          justify-content: flex-start;
          margin-bottom: var(--margin-default);

          [datatype='field'] {
            max-width: 22rem;

            &:last-of-type {
              min-width: 28rem;
            }

            &:not(:last-of-type) {
              margin-right: 2.4rem;
            }
          }
        }

        .measurements {
          display: grid;
          grid-template-columns: repeat(5, minmax(20rem, auto));
          grid-column-gap: 2.4rem;
          grid-row-gap: 1.2rem;
        }
      }
    }

    .subheading {
      font-weight: 500;
      margin-bottom: var(--margin-default);
    }

    .buttons {
      display: flex;
      align-self: flex-end;
      margin-top: var(--margin-large);

      a:first-child {
        color: var(--text-color-alpha);
        margin-right: var(--margin-default);
      }
    }
  }
`;

export default Container;
