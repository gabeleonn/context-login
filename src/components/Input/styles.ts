import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  background: #fff;
  height: 45px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  color: #161616;
  border: 2px solid transparent;
  ${({ isFocused }) =>
    isFocused
      ? css`
          border: 2px solid #fb8883;
        `
      : null}

  ${({ hasError }) =>
    hasError
      ? css`
          border: 2px solid #fc5a69;
        `
      : null}

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
  border-radius: 3px;

  > svg {
    margin-right: 15px;
    transition: color 0.2s;
    ${({ isFocused }) =>
      isFocused
        ? css`
            color: #fc5a69;
          `
        : null};
  }

  input {
    width: 100%;
    height: 100%;
    border: 0;
    background: transparent;
  }

  div {
    position: relative;

    svg {
      color: #fc5a69;

      &:hover + span {
        opacity: 1;
        visibility: visible;
      }
    }

    span {
      position: absolute;
      opacity: 0;
      visibility: hidden;
      transition: all 0.2s;
      min-width: max-content;
      left: 50%;
      top: 110%;
      transform: translateX(-50%);
      background: #fc5a69;
      color: white;
      border-radius: 3px;

      padding: 8px 8px 4px 8px;
      clip-path: polygon(
        50% 0%,
        55% 15%,
        100% 15%,
        100% 100%,
        0 100%,
        0 15%,
        45% 15%
      );
    }
  }
`;
