import React from 'react';

const Product = () => {
  const services = [
    {
      id: 1,
      title: "Digital Solutions",
      description: "Comprehensive digital transformation services including web development, mobile apps, and cloud solutions.",
      icon: "💻",
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Consulting Services",
      description: "Expert business consulting to optimize your operations and drive growth through strategic planning.",
      icon: "📊",
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Support & Maintenance",
      description: "24/7 technical support and ongoing maintenance to ensure your systems run smoothly.",
      icon: "🔧",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Bold Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive solutions to help your business thrive in the digital age
          </p>
        </div>

        {/* Services Row - 3 Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center"
            >
              {/* Service Icon */}
              <div className={`${service.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <span className="text-4xl">{service.icon}</span>
              </div>
              
              {/* Service Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              {/* Service Description */}
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              
              {/* Learn More Button */}
              <button className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
