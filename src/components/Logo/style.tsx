import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;

  font-size: 2.4rem;
  line-height: 2.8rem;
  color: var(--white-color);
  font-weight: 500;

  .icon {
    width: 3.6rem;
    height: 3.6rem;
    margin-right: var(--margin-default);
    background-color: var(--white-color);
    border-radius: 50%;

    position: relative;

    &::after {
      content: 'fitness_center';
      width: 2.4rem;
      height: 2.4rem;
      color: var(--primary-color);

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &.primary-color {
    color: var(--primary-color);

    .icon {
      background-color: var(--primary-color);
      &::after {
        color: var(--white-color);
      }
    }
  }
`;

export default Container;
