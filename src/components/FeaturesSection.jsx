
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FeaturesContainer = styled.section`
  padding: 60px 40px;
  background-image: url('/src/assets/images/legalbckgrnd-02.jpg');
  text-align: center;
  
`;

const Feature = styled(motion.div)`
  margin-bottom: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  border-radius: 10px;
`;

const FeatureTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const FeatureText = styled.p`
  font-size: 1rem;
`;

const FeaturesSection = () => (
  <FeaturesContainer id="features">
    <Feature
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <FeatureTitle>Professional and Modern Design</FeatureTitle>
      <FeatureText>First impressions matter. We design websites that reflect the professionalism and prestige of your firm.</FeatureText>
    </Feature>
    <Feature
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <FeatureTitle>SEO Optimization</FeatureTitle>
      <FeatureText>Our advanced SEO strategies improve your search engine rankings, driving more organic traffic to your site.</FeatureText>
    </Feature>
    <Feature
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      <FeatureTitle>Secure and Compliant</FeatureTitle>
      <FeatureText>We prioritize the protection of sensitive client data with top-notch security features.</FeatureText>
    </Feature>
  </FeaturesContainer>
);

export default FeaturesSection;
