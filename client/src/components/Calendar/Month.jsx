import styled from "styled-components";

const Month = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0% 5%;
  width: 87.5%;

  h3 {
    font-size: 25px;
    font-weight: 400;
    margin: 0% 0%;
  }

  @media screen and (max-width: 768px) {
    h3 {
      font-size: 20px;
    }
    img {
      width: 28px;
    }
  }

  @media screen and (max-width: 350px) {
    h3 {
      font-size: 18px;
    }
    img {
      width: 24px;
    }
  }
`;

export default Month;
