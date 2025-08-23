import React from 'react';
import { Link } from 'react-router-dom';

export default function Aboutus() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About PobolyKiosk</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Empowering communities through innovative digital solutions and exceptional service
          </p>
        </div>
      </div>

                                                       {/* Main Content */}
         <div className="w-4/5  mx-auto px-4 py-16  rounded-lg shadow-lg">
                          {/* Company Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded with a vision to revolutionize digital experiences, PobolyKiosk has been at the forefront 
              of innovation since our establishment. We believe in creating solutions that not only meet today's 
              needs but anticipate tomorrow's challenges.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our journey began with a simple mission: to make technology accessible, reliable, and beneficial 
              for everyone. Today, we continue to push boundaries and deliver excellence in every project we undertake.
            </p>
          </div>
          <div className="bg-red-100 p-8 rounded-lg">
            <div className="text-center">
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Innovation First</h3>
              <p className="text-gray-600">Pioneering the future of digital solutions</p>
            </div>
          </div>
        </div>

                          {/* Mission & Vision Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide cutting-edge digital solutions that empower businesses and individuals, 
              fostering growth and innovation in an ever-evolving technological landscape.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the leading provider of innovative digital solutions, recognized for excellence, 
              reliability, and commitment to customer success across all industries.
            </p>
          </div>
        </div>

                          {/* Core Values Section */}
          <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in everything we do</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Integrity</h3>
              <p className="text-gray-600">Honest and transparent in all our dealings</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">Continuously pushing boundaries and exploring new possibilities</p>
            </div>
          </div>
        </div>

                                                     {/* Contact Information Section */}
           <div className="bg-white rounded-lg shadow-lg p-8 mb-20">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Get In Touch</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Contact Information</h3>
                
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="bg-red-100 p-2 rounded-lg mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                      <span className="text-red-600 text-xl">📍</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Address</h4>
                    <p className="text-gray-600 text-xs">123 Innovation Street<br />Tech District, City 12345<br />Country</p>
                  </div>

                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="bg-red-100 p-2 rounded-lg mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                      <span className="text-red-600 text-xl">📞</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Phone</h4>
                    <p className="text-gray-600 text-xs">+1 (555) 123-4567</p>
                    <p className="text-gray-600 text-xs">+1 (555) 987-6543</p>
                  </div>

                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="bg-red-100 p-2 rounded-lg mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                      <span className="text-red-600 text-xl">✉️</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Email</h4>
                    <p className="text-gray-600 text-xs">info@pobolykiosk.com</p>
                    <p className="text-gray-600 text-xs">support@pobolykiosk.com</p>
                  </div>

                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="bg-red-100 p-2 rounded-lg mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                      <span className="text-red-600 text-xl">🕒</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Business Hours</h4>
                    <p className="text-gray-600 text-xs">Mon-Fri: 9AM-6PM</p>
                    <p className="text-gray-600 text-xs">Sat: 10AM-4PM</p>
                    <p className="text-gray-600 text-xs">Sun: Closed</p>
                  </div>
                </div>
             </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

                                                     {/* Team Section */}
           <div className="mb-20">
           <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Team</h2>
           <div className="grid grid-cols-3 gap-4">
             <div className="text-center p-3 bg-gray-50 rounded-lg">
               <div className="bg-red-100 p-2 rounded-lg mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                 <span className="text-red-600 text-xl">👨‍💼</span>
               </div>
               <h4 className="font-semibold text-gray-800 mb-1 text-sm">John Smith</h4>
               <p className="text-red-600 text-xs mb-1">CEO & Founder</p>
               <p className="text-gray-600 text-xs">Visionary leader with 15+ years of experience</p>
             </div>
             <div className="text-center p-3 bg-gray-50 rounded-lg">
               <div className="bg-red-100 p-2 rounded-lg mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                 <span className="text-red-600 text-xl">👩‍💻</span>
               </div>
               <h4 className="font-semibold text-gray-800 mb-1 text-sm">Sarah Johnson</h4>
               <p className="text-red-600 text-xs mb-1">CTO</p>
               <p className="text-gray-600 text-xs">Technology expert driving innovation</p>
             </div>
             <div className="text-center p-3 bg-gray-50 rounded-lg">
               <div className="bg-red-100 p-2 rounded-lg mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                 <span className="text-red-600 text-xl">👨‍🎨</span>
               </div>
               <h4 className="font-semibold text-gray-800 mb-1 text-sm">Mike Chen</h4>
               <p className="text-red-600 text-xs mb-1">Head of Design</p>
               <p className="text-gray-600 text-xs">Creative genius behind our user experiences</p>
             </div>
           </div>
         </div>

                                                     {/* Call to Action */}
           <div className="bg-gradient-to-r from-red-600 to-red-800 text-white text-center py-16 rounded-lg mt-8">
           <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
           <p className="text-xl mb-8 opacity-90">Join us in shaping the future of digital innovation</p>
                       <div className="space-x-12">
              <Link 
                to="/"
                className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 hover:shadow-lg transition-all duration-300 transform"
              >
                Explore Our Services
              </Link>
              <Link 
                to="/signup"
                className="inline-block border-2 border-white text-white px-10 py-7 ml-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 hover:scale-105 hover:shadow-lg transition-all duration-300 transform"
              >
                Get Started Today
              </Link>
            </div>
         </div>
      </div>
    </div>
  );
}
