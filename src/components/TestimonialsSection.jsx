
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialsContainer = styled.section`
  padding: 60px 40px;
  background-color: #fff;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const Testimonial = styled(motion.div)`
  margin-bottom: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
  background-color: rgba(20, 160, 185, 0.8);
  padding: 10px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  font-style: italic;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TestimonialAuthor = styled.p`
  font-size: 1rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TestimonialsSection = () => (
  <TestimonialsContainer id="testimonials">
    <Testimonial
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <TestimonialText>"Legal Pixel Pro transformed our website, and we saw a significant increase in client inquiries."</TestimonialText>
      <TestimonialAuthor>John Doe, Partner at ABC Law Firm</TestimonialAuthor>
    </Testimonial>
    <Testimonial
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <TestimonialText>"The new website is professional, secure, and has boosted our online presence immensely."</TestimonialText>
      <TestimonialAuthor>Jane Smith, Managing Partner at XYZ Legal</TestimonialAuthor>
    </Testimonial>
  </TestimonialsContainer>
);

export default TestimonialsSection;