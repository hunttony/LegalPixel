import styled from 'styled-components';
import { motion } from 'framer-motion';
import SEO from './SEO';


const StickyBar = styled.div`
  position: sticky;
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 0;
  width: 100%;
  background-color: rgba(80, 180, 180, .76);
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 1);
  font-size: 1.5rem;
  color: #ecf0f1;
  text-align: center;
  padding: 10px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);

  z-index: 750; // Ensure it stays above other content
`;

const StickyBarButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: #2c3e50;
  background-color: orange;
  text-decoration: none;
  border-radius: 20%;
  text-shadow: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s;
  max-height: 40px;

  &:hover {
    background-color: #bdc3c7;
    scale: 1.1;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;

const HeroContainer = styled.section`
  display: flex;
  
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  height: 100vh;  
  background-image: url('https://i.ibb.co/kMHY6qS/Copy-of-Untitled-Design.jpg');
  background-size: cover;
  background-position: center;
  text-align: center;
  color: #ecf0f1;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 600px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  padding: 30px;
  border-radius: 10px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
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

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;

const HeroSection = () => (

  <>
  <SEO 
      title="Transform Your Law Firm's Online Presence" 
      description="Boost your revenue with a professional, modern, and secure website." 
      keywords="law firm, legal services, online presence, professional website, secure website"
      url="https://www.yourlawfirm.com"
      image="https://www.yourlawfirm.com/assets/images/legalphoto1.jpg"
    />
  
    
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
  <StickyBar>
      <p>Welcome to Legal Pixel Pro's | Contact Us: (346) 316-6075</p>
      <StickyBarButton href="#">Get Your Free Mockup</StickyBarButton>
    </StickyBar>
  </>
);

export default HeroSection;
