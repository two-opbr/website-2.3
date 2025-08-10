import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook, Linkedin, Send, Users, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@crosslinks_nsut',
      url: '#',
      description: 'Follow for daily updates and behind-the-scenes content',
      gradient: 'from-green to-green-dark'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      handle: 'Crosslinks NSUT',
      url: '#',
      description: 'Subscribe for event highlights and documentaries',
      gradient: 'from-green to-green-dark'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      handle: 'Crosslinks NSUT',
      url: '#',
      description: 'Join our community for announcements and discussions',
      gradient: 'from-green to-green-dark'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      handle: 'Crosslinks NSUT',
      url: '#',
      description: 'Connect with us professionally and see career updates',
      gradient: 'from-green to-green-dark'
    }
  ];

  const faqItems = [
    {
      question: 'How can I collaborate with Crosslinks?',
      answer: 'We welcome collaborations! Reach out via email or social media with your proposal.'
    },
    {
      question: 'Do you cover external events?',
      answer: 'Yes, we do cover external events. Contact us to discuss your requirements and our availability.'
    },
    {
      question: 'How can I request photo/video services?',
      answer: 'Send us a detailed email with your event information, and we\'ll get back to you with a proposal.'
    },
    {
      question: 'Are you available for commercial projects?',
      answer: 'We primarily focus on university events, but we do consider select commercial projects.'
    }
  ];

  return (
    <div className="pt-16 bg-dark min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-dark-card border-b border-green/20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-green">Get In Touch</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Have a question, collaboration idea, or want to work with us? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div>
              <div className="bg-dark-card rounded-2xl border border-green/20 shadow-2xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-green mb-4">Send us a Message</h2>
                  <p className="text-gray-300">Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark border border-green/20 text-white rounded-lg focus:ring-2 focus:ring-green/50 focus:border-green transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark border border-green/20 text-white rounded-lg focus:ring-2 focus:ring-green/50 focus:border-green transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark border border-green/20 text-white rounded-lg focus:ring-2 focus:ring-green/50 focus:border-green transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="collaboration">Collaboration Request</option>
                      <option value="event-coverage">Event Coverage</option>
                      <option value="general-inquiry">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-dark border border-green/20 text-white rounded-lg focus:ring-2 focus:ring-green/50 focus:border-green transition-colors"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <div className="text-center pt-6">
                    <button
                      type="submit"
                      className="inline-flex items-center space-x-3 bg-green text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-green-dark transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                      <Send size={20} />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-green/20 transform -translate-x-1/2"></div>

            {/* Social Media Section */}
            <div>
              <div className="bg-dark-card rounded-2xl border border-green/20 shadow-2xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-green mb-4">Let's Connect</h2>
                  <p className="text-gray-300">Follow us on social media for updates and behind-the-scenes content</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="group flex flex-col items-center space-y-3 p-6 rounded-2xl bg-dark border border-green/20 hover:border-green/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green/20"
                    >
                      <div className={`p-4 rounded-full bg-gradient-to-br ${social.gradient} group-hover:scale-110 transition-transform duration-300`}>
                        <social.icon className="h-8 w-8 text-black" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-bold text-white group-hover:text-green transition-colors">{social.name}</h3>
                        <p className="text-sm text-gray-400">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-card border-t border-green/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Quick answers to common questions</p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-dark rounded-xl border border-green/20 shadow-md">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="font-semibold text-white">{faq.question}</h3>
                    <div className="text-green group-open:rotate-180 transition-transform duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green mb-4">Find Us on Campus</h2>
            <p className="text-xl text-gray-300">Located at the heart of NSUT Dwarka campus</p>
          </div>

          <div className="bg-dark-card rounded-2xl border border-green/20 shadow-2xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-dark flex items-center justify-center h-96">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green mb-2">Interactive Map</h3>
                <p className="text-gray-300">
                  Media Lab, Ground Floor<br />
                  Netaji Subhas University of Technology<br />
                  Dwarka Sector-3, New Delhi - 110078
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;