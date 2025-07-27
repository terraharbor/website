import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import UsersSection from './components/UsersSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <UsersSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
