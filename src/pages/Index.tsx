import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import KeyHighlights from '@/components/KeyHighlights';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyUsSection from '@/components/WhyUsSection';
import DestinationsSection from '@/components/DestinationsSection';
import SustainabilitySection from '@/components/SustainabilitySection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <KeyHighlights />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <DestinationsSection />
        <SustainabilitySection />
        {/*<BlogSection />*/}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
