import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;

  font-size: 2.4rem;
  line-height: 2.8rem;

  font-weight: 500;

  .icon {
    width: 3.6rem;
    height: 3.6rem;
    margin-right: var(--margin-default);
    border-radius: 50%;

    position: relative;

    &::after {
      content: 'fitness_center';
      width: 2.4rem;
      height: 2.4rem;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &.primary {
    color: var(--primary-color);

    .icon {
      background-color: var(--primary-color);
      &::after {
        color: var(--white-color);
      }
    }
  }

  &.white {
    color: var(--white-color);

    .icon {
      background-color: var(--white-color);
      &::after {
        color: var(--primary-color);
      }
    }
  }
`;

export default Container;
