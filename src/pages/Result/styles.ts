import styled from "styled-components";

export const Container = styled.div`
  background-color: #dcf5f2;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  h3 {
    color: #424242;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    margin-top: 16px;
    font-weight: 700;
    line-height: 24px;
  }

  h4{
    color: #757575 ;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    margin-top: 4px;
    font-weight: 400;
    line-height: 26px;
  }

  span {
    background-color: #00a38c;
    height: 30px;
    width: 120px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff ;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 16px;
    font-style: normal;
    line-height: 16px;
  }

  p {
    color: #757575;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-size: 11px;
    font-style: normal;
    line-height: 16px;
  }
`;
