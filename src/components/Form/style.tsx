import styled from 'styled-components';

const Container = styled.form`
  max-width: 34rem;

  [datatype='field']:not(:first-child) {
    margin-top: var(--margin-default);
  }

  & > label {
    margin-top: var(--margin-large);
  }

  button {
    margin-top: var(--margin-large);
  }
`;

export default Container;
