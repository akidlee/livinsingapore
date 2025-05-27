
import { ArrowRight, Globe, Users, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-red-50 via-white to-red-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Complete Guide to
            <span className="block text-red-600 mt-2">Moving to Singapore</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about relocating to the Lion City. From visa requirements to finding your perfect neighborhood, we've got you covered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/moving-guide"
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center justify-center group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <Link 
              to="/neighborhoods"
              className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors duration-200"
            >
              Explore Areas
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center group">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-200">
                <Globe className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Hub</h3>
              <p className="text-gray-600">Experience Asia's premier business and cultural center</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-200">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multicultural</h3>
              <p className="text-gray-600">Join a diverse, welcoming international community</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-200">
                <Building className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">World-Class</h3>
              <p className="text-gray-600">Enjoy top-tier infrastructure and quality of life</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
