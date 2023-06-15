import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #fff;

  h1 {
    font-size: 36px;
    font-weight: 100;
    margin-left: 40px;
    padding: 20px 0px;
  }

  button {
    margin-right: 40px;
    padding: 20px 0px;
  }

  @media screen and (max-width: 768px) {
    h1 {
      margin-left: 24px;
      font-size: 24px;
    }
    button {
      margin-right: 24px;
    }
  }
`;

export default Header;
