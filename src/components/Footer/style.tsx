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
  .link {
    color: var(--secondary-color);
  }

  .divider {
    color: var(--secondary-color);
    margin: 0 var(--margin-small);
  }
`;

export default Container;
