
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import QuickLinks from '@/components/QuickLinks';
import FeaturedGuides from '@/components/FeaturedGuides';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <QuickLinks />
      <FeaturedGuides />
      <Footer />
    </div>
  );
};

export default Index;
