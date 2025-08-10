import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, ArrowRight, Filter } from 'lucide-react';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Events' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'featured', label: 'Featured' }
  ];

  const events = [
    {
      id: '1',
      title: 'Annual Cultural Fest 2024',
      date: '2024-03-15',
      time: '10:00 AM',
      location: 'Main Auditorium',
      category: 'upcoming',
      featured: true,
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'The biggest cultural celebration of NSUT featuring performances, competitions, and exhibitions.',
      attendees: 500,
      status: 'upcoming'
    },
    {
      id: '2',
      title: 'Tech Symposium 2024',
      date: '2024-02-28',
      time: '9:00 AM',
      location: 'Conference Hall',
      category: 'upcoming',
      featured: false,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A gathering of tech enthusiasts showcasing innovations and breakthrough technologies.',
      attendees: 300,
      status: 'upcoming'
    },
    {
      id: '3',
      title: 'Alumni Meet 2024',
      date: '2024-04-05',
      time: '5:00 PM',
      location: 'Alumni Hall',
      category: 'upcoming',
      featured: false,
      image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Reconnecting with our graduated students and celebrating their achievements.',
      attendees: 200,
      status: 'upcoming'
    }
  ];

  const filteredEvents = events.filter(event => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return event.featured;
    if (activeFilter === 'upcoming') return event.status === 'upcoming';
    return true;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="pt-16 bg-dark min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-dark-card border-b border-green/20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-green">Our Events</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Discover the vibrant campus life through our carefully curated events and celebrations
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-dark-card/50 backdrop-blur-sm sticky top-16 z-40 border-b border-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-300" />
              <span className="font-medium text-gray-300">Filter Events:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    activeFilter === filter.id
                      ? 'bg-green text-black shadow-lg scale-105'
                      : 'bg-dark-card text-gray-300 hover:bg-green/20 hover:text-green border border-green/20'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className="group bg-dark-card rounded-2xl border border-green/20 shadow-lg overflow-hidden hover:shadow-2xl hover:border-green/40 transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${
                    event.status === 'upcoming' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-600 text-white'
                  }`}>
                    {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                  </div>

                  {/* Featured Badge */}
                  {event.featured && (
                    <div className="absolute top-4 right-4 bg-green text-black px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{formatDate(event.date)} at {event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>

                  <Link
                    to={`/events/${event.id}`}
                    className="inline-flex items-center space-x-2 text-green font-medium hover:text-green-dark group-hover:translate-x-1 transition-all duration-200"
                  >
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-dark-card rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-12 w-12 text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No events found</h3>
              <p className="text-gray-300">Try adjusting your filter to see more events.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-card border-t border-green/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-green mb-6">
            Stay Updated on Our Events
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Follow us on social media to never miss an exciting event at NSUT
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-3 bg-green text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-green-dark transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Users size={20} />
            <span>Follow Us</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Events;