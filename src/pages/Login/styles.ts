import styled, { css } from 'styled-components';

interface LinkProps {
  type: string;
}

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
  background: linear-gradient(-45deg, #fb8883, #fc5a69);

  section {
    background: #f5f6fa;
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
    );
    backdrop-filter: blur(2rem);
    padding: 15px 20px;
    align-self: center !important;
    max-width: 400px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    color: #161616;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 3px;

    h2 {
      margin-bottom: 20px;
    }

    p {
      line-height: 20px;
    }
  }
`;

export const LoginBox = styled.div`
  max-width: 600px;
  width: 100%;
  height: 100%;
  background: #f5f6fa;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  form {
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    h1 {
      color: #fc5a69;
      font-size: 42px;
      margin-bottom: 25px;
    }

    button {
      height: 45px;
      border-radius: 3px;
      border: 0;
      background: #fc5a69;
      transition: background 0.2s;
      color: #fff;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

      &:hover {
        background: #fb8883;
      }
    }
  }
`;

export const Link = styled.a<LinkProps>`
  align-self: center;
  text-decoration: none;

  ${({ type }) =>
    type === 'primary'
      ? css`
          color: #fb8883;
          margin: 15px 0;

          &:hover {
            color: #fc5a69;
          }
        `
      : css`
          color: #ccc;
          margin: 20px 0 15px 0;

          &:hover {
            color: #aaa;
          }
        `}
`;
