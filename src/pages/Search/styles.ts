import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e6e6e6;

  h1 {
    color: #4b4b4b;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 24px;
    font-style: normal;
    line-height: 30px;
  }
  h3 {
    color: #4b4b4b;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 16px;
    font-style: normal;
    line-height: 30px;
  }
`;

export const Content = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 4px -2px rgba(75, 75, 75, 0.25);
  border-radius: 8px;
  width: 100%;
  max-width: 444px;
  height: 100%;
  min-height: 192px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 45px;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
`;
