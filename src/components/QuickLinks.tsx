
import { FileText, Home, DollarSign, Users, Plane, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickLinks = () => {
  const links = [
    {
      icon: FileText,
      title: 'Visa & Immigration',
      description: 'Work permits, PR applications, and legal requirements',
      href: '/visa-immigration',
      color: 'bg-blue-500'
    },
    {
      icon: Home,
      title: 'Housing & Rentals',
      description: 'Find apartments, understand rental processes',
      href: '/housing',
      color: 'bg-green-500'
    },
    {
      icon: DollarSign,
      title: 'Banking & Finance',
      description: 'Open accounts, understand local banking',
      href: '/banking',
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: 'Healthcare System',
      description: 'Insurance, medical services, and wellness',
      href: '/healthcare',
      color: 'bg-red-500'
    },
    {
      icon: Plane,
      title: 'Transportation',
      description: 'MRT, buses, taxis, and getting around',
      href: '/transportation',
      color: 'bg-yellow-500'
    },
    {
      icon: Building2,
      title: 'Education & Schools',
      description: 'International schools and local education',
      href: '/education',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Moving Resources</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quick access to the most important information for your Singapore move
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-red-200"
            >
              <div className="flex items-start space-x-4">
                <div className={`${link.color} rounded-lg p-3 group-hover:scale-110 transition-transform duration-200`}>
                  <link.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-200">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {link.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
