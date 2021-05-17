import styled from 'styled-components';

const Container = styled.div`
  min-width: 34rem;
  max-width: 35rem;

  .heading {
    font-weight: 700;

    &--main {
      display: block;
    }
  }

  & > p {
    max-width: 34rem;
    margin: var(--margin-default) 0 var(--margin-largest) 0;
  }
`;

export default Container;
