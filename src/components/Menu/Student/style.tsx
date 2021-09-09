import styled from 'styled-components';

const Container = styled.nav`
  position: absolute;
  top: 50%;
  left: 2.4rem;
  transform: translateY(-50%);

  li {
    display: flex;
    align-items: center;
    color: var(--primary-color);

    &:first-child {
      .icon {
        border-top-left-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);
      }
    }

    &:last-child {
      .icon {
        border-bottom-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
    }

    &:hover {
      cursor: pointer;

      .icon,
      .text {
        color: var(--white-color);
        background-color: var(--primary-color);
      }

      .icon {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      .text {
        display: flex;
        align-items: center;
      }
    }
  }

  .icon {
    color: inherit;
    background-color: var(--white-color);
    padding: var(--padding-default) var(--padding-small);
  }

  .text {
    width: 12%.5rem;
    height: 2.4rem;
    display: none;
    font-size: 1.4rem;
    font-weight: 500;
    background-color: var(--white-color);
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    padding: var(--padding-large) var(--padding-small) var(--padding-large) 0;
  }
`;

export default Container;
