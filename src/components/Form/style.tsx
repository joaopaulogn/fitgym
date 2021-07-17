import styled from 'styled-components';

const Container = styled.form`
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
