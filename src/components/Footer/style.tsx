import styled from 'styled-components';

const Container = styled.footer`
  display: flex;

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
