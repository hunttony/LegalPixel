
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('hero-bg.jpg');
  background-size: cover;
  background-position: center;
  text-align: center;
  color: #ecf0f1;
`;

const HeroContent = styled(motion.div)`
  max-width: 600px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
`;

const HeroButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  color: #2c3e50;
  background-color: #ecf0f1;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #bdc3c7;
  }
`;

const HeroSection = () => (
  <HeroContainer>
    <HeroContent
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <HeroTitle>Transform Your Law Firm's Online Presence</HeroTitle>
      <HeroText>Boost your revenue with a professional, modern, and secure website.</HeroText>
      <HeroButton href="#contact">Get Your Free Mockup</HeroButton>
    </HeroContent>
  </HeroContainer>
);

export default HeroSection;
