import styled from 'styled-components';

const Container = styled.span`
  width: 100%;
  margin-top: var(--margin-small);
  color: var(--text-color-alpha);

  &.hidden {
    display: none;
    visibility: hidden;
    opacity: 0;
  }
`;

export default Container;
