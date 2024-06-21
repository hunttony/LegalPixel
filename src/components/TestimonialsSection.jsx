
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialsContainer = styled.section`
  padding: 60px 40px;
  background-color: #fff;
  text-align: center;
`;

const Testimonial = styled(motion.div)`
  margin-bottom: 40px;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  font-style: italic;
  margin-bottom: 10px;
`;

const TestimonialAuthor = styled.p`
  font-size: 1rem;
  font-weight: bold;
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
