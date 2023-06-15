import styled from "styled-components";

const AddBtn = styled.button`
  border: none;
  background: none;
  span {
    color: #ff3434;
    font-size: 48px;
  }
  @media screen and (max-width: 768px) {
    span {
      font-size: 36px;
    }
  }
`;

export default AddBtn;
