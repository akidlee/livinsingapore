
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import QuickLinks from '@/components/QuickLinks';
import FeaturedGuides from '@/components/FeaturedGuides';
import AdBanner from '@/components/AdBanner';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <QuickLinks />
      <FeaturedGuides />
      
      {/* Ad Banner Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdBanner size="banner" />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
