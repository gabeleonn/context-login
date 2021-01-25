import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  height: 100vh;

  button {
    padding: 18px 24px;
    background: #fc5a69;
    transition: all 0.2s;
    border: none;
    color: #fff;
    border-radius: 100px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    &:hover {
      background: #fb8883;
    }
  }
`;
