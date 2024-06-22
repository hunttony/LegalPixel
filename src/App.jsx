
import { GlobalStyle } from './components/GlobalStyle';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
//import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <HeroSection />
      <FeaturesSection />
      
      <CTASection />
      <Footer />
    </>
  );
};

export default App;
