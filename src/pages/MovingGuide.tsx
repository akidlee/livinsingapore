
import { CheckCircle, FileText, Users, Home, DollarSign, Plane } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MovingGuide = () => {
  const timelineSteps = [
    {
      title: '3-6 Months Before',
      icon: FileText,
      items: [
        'Research visa requirements and start application process',
        'Begin job search or secure employment offer',
        'Research neighborhoods and housing options',
        'Start learning about Singapore culture and customs'
      ]
    },
    {
      title: '1-3 Months Before',
      icon: Home,
      items: [
        'Secure housing arrangements',
        'Arrange international shipping for belongings',
        'Notify current employers and landlords',
        'Book flights and temporary accommodation'
      ]
    },
    {
      title: 'First Month in Singapore',
      icon: Users,
      items: [
        'Complete Immigration & Checkpoints Authority registration',
        'Open local bank account',
        'Get local SIM card and phone plan',
        'Register for healthcare and get insurance'
      ]
    },
    {
      title: 'Settling In',
      icon: CheckCircle,
      items: [
        'Explore your neighborhood and find essential services',
        'Join expat communities and local groups',
        'Set up utilities and internet',
        'Register children for school if applicable'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Complete Moving Guide</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Your step-by-step roadmap to successfully relocating to Singapore
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Moving Timeline</h2>
            <p className="text-xl text-gray-600">Plan your move with our comprehensive timeline</p>
          </div>

          <div className="space-y-12">
            {timelineSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="bg-red-600 rounded-full p-4">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {step.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {index < timelineSteps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-12 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Tips</h2>
            <p className="text-xl text-gray-600">Insider advice to make your move smoother</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <DollarSign className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Budget Planning</h3>
              <p className="text-gray-600">
                Singapore can be expensive. Budget for security deposits, agent fees, and initial setup costs that can total S$10,000-15,000.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <Users className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Cultural Integration</h3>
              <p className="text-gray-600">
                Embrace the multicultural environment. Learn basic phrases in local languages and understand cultural sensitivities.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <Plane className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Documentation</h3>
              <p className="text-gray-600">
                Keep multiple copies of important documents. Get them apostilled before arriving and carry originals with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MovingGuide;
