import styled from 'styled-components';

const Container = styled.span`
  display: none;
  visibility: hidden;
  opacity: 0;
  color: var(--error-color);
  margin-top: var(--margin-smallest);

  &.visible {
    display: block;
    visibility: visible;
    opacity: 1;
  }
`;

export default Container;
