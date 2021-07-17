import styled from 'styled-components';

const Container = styled.div`
  justify-content: space-between;

  .group {
    font-size: 1.4rem;
    line-height: 2rem;
    color: var(--text-color);

    &:nth-child(2) {
      display: none;
      visibility: hidden;
      opacity: 0;
    }

    &:not(:last-of-type) {
      margin-bottom: var(--margin-large);
    }

    &.active {
      display: block;
      visibility: visible;
      opacity: 1;
    }

    & > p {
      margin-bottom: var(--margin-default);
    }

    .options {
      display: flex;
    }

    textarea {
      min-width: 34rem;
      height: 17rem;
      padding: var(--padding-default);

      color: var(--text-color);
      background-color: var(--primary-color-light);
      border-radius: var(--border-radius);
      border: none;
      outline: none;
      resize: none;
    }
  }
`;

export default Container;
