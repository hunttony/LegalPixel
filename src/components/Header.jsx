
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #2c3e50;
  color: #ecf0f1;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  a {
    margin-left: 20px;
    color: #ecf0f1;
    text-decoration: none;
    font-weight: bold;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo>Legal Pixel Pro</Logo>
    <Nav>
      <a href="#features">Features</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#contact">Contact</a>
    </Nav>
  </HeaderContainer>
);

export default Header;
