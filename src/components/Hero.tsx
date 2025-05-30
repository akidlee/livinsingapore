
import { ArrowRight, Globe, Users, Building, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-red-50 via-white to-red-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Complete Guide to
              <span className="block text-red-600 mt-2">Moving to Singapore</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Everything you need to know about relocating to the Lion City. From visa requirements to finding your perfect neighborhood, we've got you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
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

            {/* Download eBook Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                📖 Free eBook Download
              </h3>
              <p className="text-gray-600 mb-4">
                Get our comprehensive 50-page guide delivered to your inbox
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center w-full group">
                <Download className="mr-2 h-5 w-5" />
                Download Free eBook
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Right side - iPad with eBook cover */}
          <div className="text-center lg:text-right">
            <div className="relative inline-block">
              {/* iPad Frame */}
              <div className="bg-gray-800 rounded-3xl p-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-black rounded-2xl p-1">
                  <img 
                    src="/lovable-uploads/0aa4d70b-eaba-4459-996e-b3a5c18ba9a3.png" 
                    alt="The Ultimate Guide to Moving to Singapore eBook"
                    className="w-full h-auto rounded-xl"
                    style={{ maxWidth: '400px' }}
                  />
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                FREE
              </div>
            </div>
          </div>
        </div>

        {/* Feature highlights */}
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
    </section>
  );
};

export default Hero;
