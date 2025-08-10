import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Video, Edit3, Palette, Users, Calendar, Image, UserPlus, Target, Heart, Award } from 'lucide-react';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      heroRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: Calendar,
      title: 'Events',
      description: 'Discover upcoming events and relive past moments',
      link: '/events',
      gradient: 'from-green to-green-dark'
    },
    {
      icon: Image,
      title: 'Gallery',
      description: 'Browse our collection of stunning photographs and videos',
      link: '/gallery',
      gradient: 'from-green to-green-dark'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'Meet the creative minds behind Crosslinks',
      link: '/team',
      gradient: 'from-green to-green-dark'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-dark">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-green/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-green/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div ref={heroRef} className="relative z-10 text-center px-4 sm:px-6 lg:px-8 transition-transform duration-100">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="block">Crosslinks</span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-normal text-green mt-2">
              The Face of NSUT
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Capturing moments, telling stories, connecting communities through the lens of creativity
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/events"
              className="group bg-green text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-dark transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
            >
              <span>Explore Events</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-green/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-green/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-green mb-4">
              Discover What We Do
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From capturing spectacular events to building an amazing community, explore everything Crosslinks has to offer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group relative overflow-hidden rounded-2xl bg-dark p-8 border border-green/20 shadow-lg hover:shadow-2xl hover:border-green/40 transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-black" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="flex items-center text-green font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark border-t border-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green mb-4">Our Values</h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Excellence',
                description: 'We strive for perfection in every shot, every story, every design.'
              },
              {
                icon: Users,
                title: 'Community',
                description: 'Building connections and fostering the NSUT spirit through our work.'
              },
              {
                icon: Heart,
                title: 'Passion',
                description: 'Driven by love for creative expression and storytelling.'
              },
              {
                icon: Award,
                title: 'Innovation',
                description: 'Embracing new technologies and creative approaches to media.'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="text-center bg-dark/50 backdrop-blur-sm rounded-2xl border border-green/20 p-8 hover:bg-dark/70 hover:border-green/40 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green/20 rounded-2xl mb-6">
                  <value.icon className="h-8 w-8 text-green" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark border-t border-green/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-green mb-6">
            Experience NSUT Through Our Lens
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover the vibrant campus life and memorable moments captured by our talented team
          </p>
          <Link
            to="/gallery"
            className="inline-flex items-center space-x-3 bg-green text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-green-dark transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Image size={24} />
            <span>Explore Our Gallery</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;