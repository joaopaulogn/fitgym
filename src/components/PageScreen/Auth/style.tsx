import styled from 'styled-components';

const Container = styled.section`
  width: 35rem;

  .subheading {
    max-width: 34rem;
    margin: var(--margin-smallest) 0 var(--margin-largest) 0;
  }

  .info-text {
    margin-top: var(--margin-large);
    margin-bottom: var(--margin-largest);
  }
`;

export default Container;
