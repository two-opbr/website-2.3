import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Users, ArrowLeft, Camera, Share2 } from 'lucide-react';

const EventDetail = () => {
  const { id } = useParams();

  // Sample events data - in a real app, you'd fetch this from an API
  const eventsData = {
    '1': {
      id: '1',
      title: 'Annual Cultural Fest 2024',
      date: '2024-03-15',
      time: '10:00 AM - 8:00 PM',
      location: 'Main Auditorium & Campus Grounds',
      description: `The Annual Cultural Fest 2024 is NSUT's biggest celebration of arts, culture, and creativity. This year's theme "Unity in Diversity" brings together students from all departments to showcase their talents through various competitions, performances, and exhibitions.

      The event features multiple stages with live performances, art exhibitions, food stalls, and interactive workshops. Students can participate in dance competitions, music battles, drama performances, and art contests. Special guest performances by renowned artists will be the highlight of the evening.

      This is not just an event, but a celebration of the vibrant student community at NSUT. Come join us for a day filled with energy, creativity, and unforgettable memories.`,
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1200',
      attendees: 500,
      status: 'upcoming',
      organizers: ['Cultural Committee', 'Student Council', 'Crosslinks Media'],
      highlights: [
        'Live performances by 20+ student groups',
        'Art exhibition featuring 50+ artworks',
        'Food festival with 15+ cuisines',
        'Interactive workshops and masterclasses',
        'Special guest performances',
        'Photography and videography coverage'
      ],
      gallery: [
        'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    '2': {
      id: '2',
      title: 'Tech Symposium 2024',
      date: '2024-02-28',
      time: '9:00 AM - 5:00 PM',
      location: 'Conference Hall',
      description: `The Tech Symposium 2024 is a premier technology event bringing together students, faculty, and industry experts to explore the latest innovations and breakthrough technologies shaping our future.

      This symposium features keynote speeches from renowned tech leaders, interactive workshops on emerging technologies, and networking opportunities with industry professionals. Participants will gain insights into AI, machine learning, blockchain, and other cutting-edge technologies.

      Join us for a day of learning, innovation, and inspiration as we explore the technological landscape of tomorrow.`,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200',
      attendees: 300,
      status: 'upcoming',
      organizers: ['Tech Committee', 'Computer Science Department', 'Crosslinks Media'],
      highlights: [
        'Keynote speeches by industry leaders',
        'Hands-on workshops on emerging technologies',
        'Networking sessions with professionals',
        'Student project showcases',
        'Panel discussions on tech trends',
        'Career guidance sessions'
      ],
      gallery: [
        'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    '3': {
      id: '3',
      title: 'Alumni Meet 2024',
      date: '2024-04-05',
      time: '5:00 PM - 10:00 PM',
      location: 'Alumni Hall',
      description: `The Alumni Meet 2024 is a special gathering that brings together our graduated students to reconnect with their alma mater and celebrate their achievements in various fields.

      This event provides an opportunity for current students to interact with successful alumni, gain career insights, and build valuable professional networks. Alumni will share their experiences, success stories, and provide guidance to the next generation.

      Join us for an evening of nostalgia, networking, and celebration as we honor our alumni's contributions to society.`,
      image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1200',
      attendees: 200,
      status: 'upcoming',
      organizers: ['Alumni Committee', 'Student Affairs', 'Crosslinks Media'],
      highlights: [
        'Alumni success story presentations',
        'Networking dinner and reception',
        'Career guidance sessions',
        'Campus tour for alumni',
        'Awards ceremony for distinguished alumni',
        'Cultural performances by current students'
      ],
      gallery: [
        'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/933255/pexels-photo-933255.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    }
  };

  // Get the event data based on the ID, fallback to event 1 if not found
  const event = eventsData[id as keyof typeof eventsData] || eventsData['1'];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="pt-16 bg-dark min-h-screen">
      {/* Navigation */}
      <div className="bg-dark-card/80 backdrop-blur-sm border-b border-green/20 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/events"
            className="inline-flex items-center space-x-2 text-green hover:text-green-dark font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Events</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96 lg:h-[500px] overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center space-x-4 mb-4">
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  event.status === 'upcoming' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-500 text-white'
                }`}>
                  {event.status === 'upcoming' ? 'Upcoming Event' : 'Past Event'}
                </span>
                <button className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                {event.title}
              </h1>
              
              <div className="flex flex-wrap gap-6 text-white/90">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>{event.attendees} attendees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Interactive Event Description */}
              <div className="bg-dark-card rounded-2xl border border-green/20 shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-green mb-6">About This Event</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 object-cover rounded-xl border border-green/20"
                    />
                  </div>
                  <div>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Join us for {event.title}, one of NSUT's most anticipated events of the year. 
                      This celebration brings together our entire community for an unforgettable experience.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      From spectacular performances to interactive workshops, this event showcases 
                      the incredible talent and creativity of our student body.
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-green">
                        <Users className="h-5 w-5 mr-2" />
                        <span className="font-medium">{event.attendees} Expected</span>
                      </div>
                      <div className="flex items-center text-green">
                        <Calendar className="h-5 w-5 mr-2" />
                        <span className="font-medium">{event.status === 'upcoming' ? 'Upcoming' : 'Completed'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Highlights */}
              <div className="bg-dark-card rounded-2xl border border-green/20 shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-green mb-6">Event Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-green rounded-full mt-2"></div>
                      <span className="text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo Gallery */}
              <div className="bg-dark-card rounded-2xl border border-green/20 shadow-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-green">Event Gallery</h2>
                  <Camera className="h-6 w-6 text-gray-500" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {event.gallery.map((image, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-xl border border-green/20">
                      <img
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Event Details Card */}
              <div className="bg-dark-card rounded-2xl border border-green/20 shadow-lg p-8">
                <h3 className="text-xl font-bold text-green mb-6">Event Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-gray-400 mb-1">Date & Time</div>
                    <div className="text-white">{formatDate(event.date)}</div>
                    <div className="text-gray-300">{event.time}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-400 mb-1">Location</div>
                    <div className="text-white">{event.location}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-400 mb-1">Expected Attendees</div>
                    <div className="text-white">{event.attendees} people</div>
                  </div>
                </div>
              </div>

              {/* Organizers Card */}
              <div className="bg-dark-card rounded-2xl border border-green/20 shadow-lg p-8">
                <h3 className="text-xl font-bold text-green mb-6">Organized By</h3>
                <div className="space-y-3">
                  {event.organizers.map((organizer, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green to-green-dark rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-black" />
                      </div>
                      <span className="font-medium text-white">{organizer}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Card */}
              <div className="bg-green rounded-2xl p-8 text-black">
                <h3 className="text-xl font-bold mb-4">Interested in Our Events?</h3>
                <p className="mb-6 text-black/80">
                  Join Crosslinks to be part of organizing amazing events like this!
                </p>
                <Link
                  to="/join"
                  className="inline-flex items-center space-x-2 bg-black/20 text-black px-6 py-3 rounded-full font-bold hover:bg-black/30 transition-colors"
                >
                  <Users className="h-5 w-5" />
                  <span>Join Our Team</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;