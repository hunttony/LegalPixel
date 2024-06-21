
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CTAContainer = styled.section`
  padding: 60px 40px;
  background-color: #2c3e50;
  text-align: center;
  color: #ecf0f1;
`;

const CTATitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const CTAText = styled.p`
  font-size: 1rem;
  margin-bottom: 40px;
`;

const CTAButton = styled.a`
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

const CTASection = () => (
  <CTAContainer id="contact">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <CTATitle>Ready to Boost Your Revenue?</CTATitle>
      <CTAText>Get your free, customized website mockup today and see the potential for your law firm's online presence.</CTAText>
      <CTAButton href="#contact">Get Your Free Mockup</CTAButton>
    </motion.div>
  </CTAContainer>
);

export default CTASection;
