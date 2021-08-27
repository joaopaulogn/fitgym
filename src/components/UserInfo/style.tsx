import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: var(--padding-default);
  margin-bottom: var(--margin-large);

  color: var(--white-color);
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);

  .info {
    span {
      color: var(--white-color-alpha);
    }
  }

  .icon {
    color: var(--white-color);
    z-index: 2;
  }
`;

export default Container;
