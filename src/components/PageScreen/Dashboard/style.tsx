import styled from 'styled-components';

const Container = styled.main`
  & > section {
    height: 56.7rem;
    display: flex;

    & > section,
    .about {
      padding: var(--padding-large);
      background-color: var(--white-color);
      border: 0.1rem solid var(--gray-color);
      border-radius: var(--border-radius);

      &.students {
        padding-top: 0;
      }

      &.profile,
      &.contact {
        min-width: 52.3rem;
      }
    }
  }
`;

export default Container;
