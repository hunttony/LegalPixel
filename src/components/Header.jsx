import { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #f26000;
  color: #ecf0f1;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
  z-index: 1000;


  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Phone = styled.h1`
  font-size: 2.5rem;
  text-shadow: 2px 5px 5px rgba(50, 50, 50, .8);
  color: black;
  &:hover{
    cursor: pointer;
    scale: 1.1;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  text-shadow: 3px 3px 6px rgba(80, 255, 255, 1);
  font-family: Tahoma;
  padding: 20px;
  border-radius: 30%;
  background-color: black;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
  
  &:hover{
    cursor: pointer;
    scale: 1.1;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    
  }
`;

const Nav = styled.nav`
  a {
    margin-left: 20px;
    color: #ecf0f1;
    text-decoration: none;
    font-weight: bold;
    

    @media (max-width: 768px) {
      display: block;
      padding: 10px 20px;
      margin: 0;
    }

    &:hover {
      color: lighgtgrey;
      text-shadow: 3px 3px 6px rgba(0, 255, 255, 1);
    }
  }



  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    right: 0;
    margin-right: 5px;
    width: 200px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.55);
    display: ${(props) => (props.open ? 'block' : 'none')};
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
    z-index: 1000;


  span {
    height: 2px;
    width: 25px;
    background: #ecf0f1;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
    z-index: 1000;

  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <Logo>Legal Pixel Pro</Logo>
      <Phone>(346) 316-6075</Phone>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <Nav open={isOpen}>
        <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
       
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
