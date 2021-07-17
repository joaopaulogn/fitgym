import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  justify-content: flex-start;

  &.left {
    color: var(--white-color);
  }

  &.right {
    color: var(--text-color);
    justify-content: flex-end;
    margin-top: var(--margin-large);
    padding-top: var(--padding-default);
    border-top: 0.1rem solid rgb(80, 86, 104, 0.1);
  }

  .text:not(:first-of-type) {
    margin-right: var(--margin-large);
  }

  .link:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .text,
  .link,
  .divider {
    color: inherit;
  }

  .divider {
    margin: 0 var(--margin-small);
  }
`;

export default Container;
