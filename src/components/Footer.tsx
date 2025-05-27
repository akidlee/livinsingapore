
import { MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    'Moving Guides': [
      { name: 'Complete Moving Checklist', href: '/checklist' },
      { name: 'Visa & Immigration', href: '/visa-immigration' },
      { name: 'Housing & Rentals', href: '/housing' },
      { name: 'Cost of Living', href: '/cost-of-living' }
    ],
    'Areas & Neighborhoods': [
      { name: 'Central Business District', href: '/areas/cbd' },
      { name: 'Orchard Road', href: '/areas/orchard' },
      { name: 'Sentosa', href: '/areas/sentosa' },
      { name: 'East Coast', href: '/areas/east-coast' }
    ],
    'Resources': [
      { name: 'Government Services', href: '/resources/government' },
      { name: 'Banking Guide', href: '/resources/banking' },
      { name: 'Healthcare System', href: '/resources/healthcare' },
      { name: 'Transportation', href: '/resources/transport' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold">Singapore Move Navigator</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your comprehensive guide to moving and living in Singapore. We provide expert advice, 
              practical tips, and insider knowledge to make your relocation smooth and successful.
            </p>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@singaporemovenavigator.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+65 6123 4567</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 text-red-400">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Singapore Move Navigator. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
