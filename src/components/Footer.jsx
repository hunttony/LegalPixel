
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px 40px;
  background-color: #2c3e50;
  color: #ecf0f1;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const FooterText = styled.p`
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>&copy; 2024 Legal Pixel Pro. All rights reserved.</FooterText>
  </FooterContainer>
);

export default Footer;
