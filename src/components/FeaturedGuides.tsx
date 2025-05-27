
import { Clock, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedGuides = () => {
  const guides = [
    {
      title: 'Complete Visa Application Guide',
      excerpt: 'Step-by-step process for obtaining work permits, dependent passes, and permanent residency in Singapore.',
      readTime: '15 min read',
      category: 'Immigration',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      href: '/guides/visa-application'
    },
    {
      title: 'Best Neighborhoods for Expats',
      excerpt: 'Discover the top areas to live in Singapore, from bustling city centers to family-friendly suburbs.',
      readTime: '12 min read',
      category: 'Housing',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      href: '/guides/neighborhoods'
    },
    {
      title: 'Setting Up Your Life in Singapore',
      excerpt: 'Essential checklist for your first month: banking, phone plans, transportation, and more.',
      readTime: '10 min read',
      category: 'Getting Started',
      image: 'https://images.unsplash.com/photo-1551818255-e6e10975cd17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      href: '/guides/first-month'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Moving Guides</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            In-depth guides to help you navigate your Singapore relocation journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <article key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={guide.image} 
                  alt={guide.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {guide.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-200">
                  <Link to={guide.href}>{guide.title}</Link>
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {guide.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{guide.readTime}</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={guide.href}
                    className="text-red-600 font-medium hover:text-red-700 transition-colors duration-200"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGuides;
