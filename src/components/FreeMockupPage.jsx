import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SEO from './SEO';

// SEO for Free Mockup Page
const seoData = {
  title: "Request a Free Mockup | Your Law Firm",
  description: "Get a free, professional mockup of your law firm's website. Boost your online presence with our expert design services.",
  keywords: "free mockup, law firm website, professional design, website mockup",
  url: "https://www.yourlawfirm.com/free-mockup",
  image: "https://www.yourlawfirm.com/assets/images/mockup.jpg"
};

// Styled Components
const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('https://i.ibb.co/DLD6fBz/legalphoto1.jpg');
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const FormContainer = styled(motion.div)`
  background: rgba(220, 160, 75,.9);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  max-width: 600px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const FormTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: black;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 5px;
  color: #2c3e50;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    border-color: #2c3e50;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
  font-size: 1rem;
  resize: none;

  &:focus {
    border-color: #2c3e50;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #ffffff;
  background-color: #2c3e50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);

  &:hover {
    background-color: #34495e;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;

const FreeMockupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/mockup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Request submitted successfully');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Failed to submit request');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting request');
    }
  };

  return (
    <>
      <SEO 
        title={seoData.title} 
        description={seoData.description} 
        keywords={seoData.keywords}
        url={seoData.url}
        image={seoData.image}
      />
      <PageContainer>
        <FormContainer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FormTitle>Request Your Free Mockup</FormTitle>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="name">Name</Label>
            <Input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />

            <Label htmlFor="email">Email</Label>
            <Input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />

            <Label htmlFor="phone">Phone</Label>
            <Input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />

            <Label htmlFor="message">Message</Label>
            <TextArea 
              id="message" 
              name="message" 
              rows="5" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            ></TextArea>

            <SubmitButton type="submit">Submit</SubmitButton>
          </Form>
        </FormContainer>
      </PageContainer>
    </>
  );
};

export default FreeMockupPage;
