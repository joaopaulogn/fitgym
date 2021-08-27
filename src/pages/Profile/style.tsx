import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  section {
    min-width: 52.3rem;
    padding: var(--padding-large);
    background-color: var(--white-color);
    border: 0.1rem solid var(--gray-color);
    border-radius: var(--border-radius);
  }

  .menu {
    display: flex;
    margin-bottom: var(--margin-largest);

    & > li:not(:last-child) {
      margin-right: var(--margin-largest);
    }
  }
`;

export default Container;
