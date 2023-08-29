import styled from "@emotion/styled";

export const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 10px;
  background: #fceec8;
  min-height: 100vh;
`;

export const Title = styled.h1`
  color: red;
  font-size: 40px;
  text-transform: uppercase;
  display: inline-block;
  text-align: center;
  text-shadow: 0 2px 1px rgba(0, 0, 0, 0.5);
`;

export const Err = styled.div`
color: :
font-size: 40px;`;

export const Spinner = styled.div`
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 3px solid;
  animation: frames 0.8s linear 0s infinite;

  :after {
    content: "";
    position: absolute;
    width: 60px;
    height: 30px;
    background-color: red;
    border-bottom: 4px solid;
    top: -4px;
  }

  :before {
    content: "";
    position: absolute;
    background-color: #fff;
    width: 10px;
    height: 10px;
    border: 4px solid;
    border-radius: 50%;
    bottom: 18px;
    right: 18px;
    z-index: 1;
  }

  @keyframes frames {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
