import styled from 'styled-components';

const Container = styled.section`
  width: 62.9rem;
  display: flex;
  flex-direction: column;

  .steps {
    padding-bottom: var(--padding-default);
    position: relative;

    span::after {
      content: '';
      display: block;
      width: 100%;
      height: 0.4rem;
      border-radius: var(--border-radius);
      background-color: var(--gray-color);

      position: absolute;
      top: 0;
      left: 0;
    }

    span:first-child {
      color: var(--primary-color);
      margin-right: var(--margin-large);

      &::after {
        background-color: var(--primary-color);
      }
    }

    span:last-child {
      color: var(--gray-color);
    }
  }

  .content {
    width: 100%;
    border: 0.1rem solid var(--gray-color);
    background-color: var(--primary-color-light);
    border-radius: var(--border-radius);
  }

  .button {
    font-size: 1.4rem;
    line-height: 2rem;
    color: var(--gray-color);

    &.active {
      color: var(--primary-color);
    }
  }
`;

export default Container;
