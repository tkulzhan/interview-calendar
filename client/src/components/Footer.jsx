import styled from "styled-components";

const FooterLink = styled.a`
  text-decoration: none;
  color: #ff3434;
  font-size: 28px;
  padding-left: 40px
`;

const Footer = () => {
  return (
    <footer>
      <FooterLink>Today</FooterLink>
      <FooterLink></FooterLink>
    </footer>
  );
};

export default Footer;
