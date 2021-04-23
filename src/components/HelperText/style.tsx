import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;

  .text {
    color: var(--text-color);
    margin-right: var(--margin-small);
  }

  .action {
    color: var(--primary-color);
    font-weight: 500;
  }
`;

export default Container;