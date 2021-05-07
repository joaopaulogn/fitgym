import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--margin-largest);

  .heading {
    font-weight: 500;
    margin-bottom: var(--margin-smallest);
  }
`;

export default Container;
