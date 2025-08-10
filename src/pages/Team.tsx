import React, { useState } from 'react';
import { Camera, Video, Edit3, Monitor, Users, Filter, Linkedin, Instagram, Mail } from 'lucide-react';

const Team = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const departments = [
    { id: 'all', label: 'All Members', icon: Users },
    { id: 'core', label: 'Core Members', icon: Users },
    { id: 'photography', label: 'Photography', icon: Camera },
    { id: 'videography', label: 'Videography', icon: Video },
    { id: 'content', label: 'Content Design', icon: Edit3 },
    { id: 'tech', label: 'Tech Department', icon: Monitor }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Arjun Sharma',
      role: 'President',
      department: 'core',
      image: 'https://crosslinksnsut.vercel.app/img/mithilesh.png',
      bio: 'Leading Crosslinks with vision and passion for storytelling.',
      funFact: 'Has been with Crosslinks for 3 years and organized 50+ events!',
      social: {
        linkedin: '#',
        instagram: '#',
        email: 'president@crosslinks.com'
      },
      skills: ['Leadership', 'Event Management', 'Strategic Planning']
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Vice President',
      department: 'core',
      image: 'https://crosslinksnsut.vercel.app/img/akshath.png',
      bio: 'Supporting the vision and managing day-to-day operations.',
      funFact: 'Joined as a photographer and now leads the entire organization!',
      social: {
        linkedin: '#',
        instagram: '#',
        email: 'vp@crosslinks.com'
      },
      skills: ['Operations', 'Team Management', 'Communication']
    },
    {
      id: 3,
      name: 'Vikram Kumar',
      role: 'Photography Lead',
      department: 'photography',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Passionate about capturing life\'s beautiful moments through the lens.',
      funFact: 'Has photographed over 100 events in the past year!',
      social: {
        linkedin: '#',
        instagram: '#',
        email: 'photo@crosslinks.com'
      },
      skills: ['Portrait Photography', 'Event Coverage', 'Photo Editing']
    },
    {
      id: 4,
      name: 'Ananya Raj',
      role: 'Videography Head',
      department: 'videography',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Storyteller through moving pictures, creating cinematic experiences.',
      funFact: 'Can edit a 10-minute video in under 2 hours!',
      social: {
        linkedin: '#',
        instagram: '#',
        email: 'video@crosslinks.com'
      },
      skills: ['Cinematography', 'Video Editing', 'Motion Graphics']
    },
    {
      id: 5,
      name: 'Rahul Gupta',
      role: 'Content Design Lead',
      department: 'content',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Crafting compelling narratives that bring our visual stories to life.',
      funFact: 'Has written over 200 articles for the university magazine!',
      social: {
        linkedin: '#',
        instagram: '#',
        email: 'content@crosslinks.com'
      },
      skills: ['Creative Writing', 'Social Media', 'Content Strategy']
    },
    {
      id: 6,
      name: 'Kiran Mehta',
      role: 'Tech Lead',
      department: 'tech',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Managing our digital presence and technical infrastructure.',
      funFact: 'Built the entire Crosslinks website from scratch!',
      social: {
        linkedin: '#',
        instagram: '#',
        email: 'tech@crosslinks.com'
      },
      skills: ['Web Development', 'Database Management', 'System Administration']
    }
  ];

  const testimonials = [
    {
      name: 'Arjun Sharma',
      role: 'President',
      quote: 'Joining Crosslinks was the best decision of my college life. It helped me grow both personally and professionally.',
      image: 'https://crosslinksnsut.vercel.app/img/mithilesh.png'
    },
    {
      name: 'Priya Patel',
      role: 'Vice President',
      quote: 'The skills I learned at Crosslinks directly helped me develop leadership qualities. Forever grateful!',
      image: 'https://crosslinksnsut.vercel.app/img/akshath.png'
    },
    {
      name: 'Vikram Kumar',
      role: 'Photography Lead',
      quote: 'Crosslinks gave me the platform to showcase my photography skills and connect with amazing people.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const filteredMembers = teamMembers.filter(member => {
    if (activeFilter === 'all') return true;
    return member.department === activeFilter;
  });

  const getDepartmentStats = () => {
    const stats = {
      core: teamMembers.filter(m => m.department === 'core').length,
      photography: teamMembers.filter(m => m.department === 'photography').length,
      videography: teamMembers.filter(m => m.department === 'videography').length,
      content: teamMembers.filter(m => m.department === 'content').length,
      tech: teamMembers.filter(m => m.department === 'tech').length
    };
    return stats;
  };

  const stats = getDepartmentStats();

  return (
    <div className="pt-16 bg-dark min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-dark-card border-b border-green/20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-green">Meet Our Team</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto mb-8">
            The creative minds behind Crosslinks - passionate individuals dedicated to capturing NSUT's story
          </p>
          
          {/* Team Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-green">{stats.core}</div>
              <div className="text-gray-300">Core</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-green">{stats.photography}</div>
              <div className="text-gray-300">Photography</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-green">{stats.videography}</div>
              <div className="text-gray-300">Videography</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-green">{stats.content}</div>
              <div className="text-gray-300">Content</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-green">{stats.tech}</div>
              <div className="text-gray-300">Tech</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-dark-card/50 backdrop-blur-sm sticky top-16 z-40 border-b border-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-300" />
              <span className="font-medium text-gray-300">Filter by Department:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setActiveFilter(dept.id)}
                  className={`flex items-center space-x-2 px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    activeFilter === dept.id
                      ? 'bg-green text-black shadow-lg scale-105'
                      : 'bg-dark-card text-gray-300 hover:bg-green/20 hover:text-green border border-green/20'
                  }`}
                >
                  <dept.icon className="h-4 w-4" />
                  <span>{dept.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMembers.map((member, index) => (
              <div
                key={member.id}
                className="group bg-dark-card rounded-2xl border border-green/20 shadow-lg overflow-hidden hover:shadow-2xl hover:border-green/40 transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Profile Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Social Links Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={member.social.linkedin}
                        className="bg-green/20 backdrop-blur-sm p-2 rounded-full text-green hover:bg-green/30 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href={member.social.instagram}
                        className="bg-green/20 backdrop-blur-sm p-2 rounded-full text-green hover:bg-green/30 transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="bg-green/20 backdrop-blur-sm p-2 rounded-full text-green hover:bg-green/30 transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-green font-medium mb-3">{member.role}</p>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-green/20 text-green px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Fun Fact */}
                  <div className="bg-green/10 p-3 rounded-lg border border-green/20">
                    <p className="text-sm text-gray-300">
                      <span className="font-medium text-green">Fun fact:</span> {member.funFact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-dark-card rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-12 w-12 text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No team members found</h3>
              <p className="text-gray-300">Try selecting a different department filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* What Our Members Say */}
      <section className="py-20 bg-dark-card border-t border-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green mb-4">What Our Members Say</h2>
            <p className="text-xl text-gray-300">Hear from our team members about their Crosslinks experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-dark rounded-2xl border border-green/20 p-8 shadow-lg hover:border-green/40 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-green/20"
                  />
                  <div>
                    <h3 className="font-bold text-white">{testimonial.name}</h3>
                    <p className="text-green">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;