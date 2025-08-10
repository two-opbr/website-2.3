import React from 'react';
import { Camera, Video, Edit3, Palette, Users, Award, Target, Heart, Monitor } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'Crosslinks was founded with a vision to capture and share the vibrant life of NSUT campus.',
      image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      year: '2019',
      title: 'Growing Strong',
      description: 'Expanded our team and started covering major university events and festivals.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      year: '2021',
      title: 'Digital Innovation',
      description: 'Launched our digital platforms and embraced new technologies for better storytelling.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      year: '2024',
      title: 'Present Day',
      description: 'Now the premier media organization of NSUT, continuing to capture moments that matter.',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const departments = [
    {
      icon: Users,
      name: 'Content Department',
      description: 'Leadership team guiding the vision and strategy of Crosslinks across all departments.',
      color: 'from-green to-green-dark',
      members: 8
    },
    {
      icon: Camera,
      name: 'Photography',
      description: 'Capturing life\'s most precious moments through the lens, from intimate portraits to grand events.',
      color: 'from-green to-green-dark',
      members: 15
    },
    {
      icon: Video,
      name: 'Videography',
      description: 'Creating compelling visual stories that move, inspire, and document the NSUT experience.',
      color: 'from-green to-green-dark',
      members: 12
    },
    {
      icon: Edit3,
      name: 'Content Design',
      description: 'Crafting engaging narratives that give voice to our visual stories and connect with our audience.',
      color: 'from-green to-green-dark',
      members: 10
    },
    {
      icon: Monitor,
      name: 'Tech Department',
      description: 'Managing digital platforms, websites, and technical infrastructure for seamless operations.',
      color: 'from-green to-green-dark',
      members: 8
    }
  ];

  return (
    <div className="pt-16 bg-dark">
      {/* Hero Section */}
      <section className="py-20 bg-dark border-b border-green/20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-green">ABOUT US</h1>
          <div className="w-24 h-1 bg-green mx-auto mb-8"></div>
          
          <div className="max-w-6xl mx-auto mt-16">
            {/* Image at the top */}
            <div className="mb-12 opacity-0 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <div className="mx-auto max-w-2xl">
                <img
                  src="https://crosslinksnsut.vercel.app/img/CROSSLINKS.jpg"
                  alt="Crosslinks NSUT"
                  className="w-full h-80 object-cover rounded-2xl border border-green/20 shadow-lg"
                />
              </div>
            </div>
            
            {/* Text content below the image */}
            <div className="text-center opacity-0 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto">
                Crosslinks is the Student & Public Relations Society of NSUT. It is one of the most well-known societies of our college. It brings to you everything there is to know about NSUT and puts our institution on a national platform. Whether it's about connecting students and authorities together, promoting the college, or organizing numerous events and fests throughout the year, Crosslinks does it all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green mb-4">Our Journey</h2>
            <p className="text-xl text-gray-300">Milestones that shaped Crosslinks</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-green to-green-dark"></div>

            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-16`}>
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-dark rounded-2xl border border-green/20 shadow-lg p-8 hover:shadow-xl hover:border-green/40 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-green to-green-dark text-black px-4 py-2 rounded-full font-bold">
                        {item.year}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-300 mb-6">{item.description}</p>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-xl border border-green/20"
                    />
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green to-green-dark rounded-full border-4 border-dark shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green mb-4">Our Departments</h2>
            <p className="text-xl text-gray-300">Where creativity meets expertise</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="group bg-dark-card rounded-2xl border border-green/20 shadow-lg p-8 hover:shadow-2xl hover:border-green/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${dept.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <dept.icon className="h-8 w-8 text-black" />
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{dept.name}</h3>
                  <span className="bg-green/20 text-green px-3 py-1 rounded-full text-sm font-medium">
                    {dept.members} members
                  </span>
                </div>
                
                <p className="text-gray-300 leading-relaxed">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;