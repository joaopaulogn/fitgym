import styled from 'styled-components';

const Container = styled.form`
  width: 40rem;

  .group {
    font-size: 1.4rem;
    line-height: 2rem;
    color: var(--text-color);
    margin-bottom: var(--margin-large);

    &:nth-child(2) {
      display: none;
      visibility: hidden;
      opacity: 0;
    }

    &.active {
      display: block;
      visibility: visible;
      opacity: 1;
    }
  }

  .options {
    display: flex;
    margin-top: var(--margin-default);
  }

  textarea {
    width: 34rem;
    height: 17rem;
    padding: var(--padding-default);
    margin-top: var(--margin-default);

    color: var(--text-color);
    background-color: var(--primary-color-light);
    border: none;
    outline: none;
    border-radius: var(--border-radius);
    resize: none;
  }
`;

export default Container;
