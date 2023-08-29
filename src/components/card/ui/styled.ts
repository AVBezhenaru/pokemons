import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 96px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  background: #90c22c;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
  flex-wrap: wrap;
  padding: 0 20px;
  transition: all 0.5s ease;

  j img {
    height: 100%;
    width: auto;
  }

  h1 {
    margin-right: auto;
    flex-grow: 1;
    // width: 15%;
  }
`;

export const Type = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  //   width: 15%;

  p {
    margin: 5px;
  }
`;

export const Abilities = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  //   width: 20%;

  p {
    margin: 5px;
  }
`;

export const Stat = styled.div`
  display: flex;
  align-items: center;
  //   width: 35%;

  p {
    margin: 5px;
    text-align: center;
  }
`;
