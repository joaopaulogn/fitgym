import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > .text {
    color: var(--text-color);
    margin-bottom: var(--margin-large);

    span {
      display: block;
    }
  }

  & > .data + button {
    margin-top: var(--margin-default);
    align-self: flex-end;
  }
`;

export default Container;
