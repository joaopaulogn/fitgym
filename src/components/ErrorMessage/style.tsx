import styled from 'styled-components';

const Container = styled.span`
  width: 100%;
  display: none;
  visibility: hidden;
  opacity: 0;
  margin-top: var(--margin-small);

  color: var(--error-color);

  &.visible {
    display: block;
    visibility: visible;
    opacity: 1;
  }
`;

export default Container;
